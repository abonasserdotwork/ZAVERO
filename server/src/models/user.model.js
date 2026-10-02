const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is Required'],
      trim: true,
    },

    email: {
      type: String,
      required: [true, 'Email is Required'],
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      trim: true,
      default: null,
    },

    password: {
      type: String,
      required: [true, 'Password is Required'],
      minlength: 8,
      select: false,
    },

    role: {
      type: String,
      enum: ['customer', 'admin'],
      default: 'customer',
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 12);
});

UserSchema.methods.matchPassword = (EnteredPassword) => {
  return bcrypt.compare(EnteredPassword, this.password);
};

UserSchema.methods.generateToken = () => {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

module.exports = mongoose.model('User', UserSchema);
