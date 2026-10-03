const Address = require("../models/address.model.js");
const { asyncHandler } = require("../utils/asyncHandler.js");


const createAddress = asyncHandler(async (req, res) => {
    const {
        fullName,
        phone,
        street,
        label,
        city,
        state,
        postalCode,
        country,
        isDefault,
    } = req.body;


    if (!fullName || !phone || !street || !label || !city || !country) {
        return res.status(400).json({
            message: "Please provide all required address fields",
        });
    }

    if (isDefault) {
        await Address.updateMany({ user: req.user._id }, { isDefault: false });
    }


    const address = await Address.create({
        user: req.user._id,
        fullName,
        phone,
        street,
        label,
        city,
        state,
        postalCode,
        country,
        isDefault: isDefault || false,
    });


    return res.status(201).json({
        message: "Address created successfully",
        address,
    });
});


const getAddresses = asyncHandler(async (req, res) => {
    const addresses = await Address.find({ user: req.user._id }).sort({ createdAt: -1 });

    return res.status(200).json({
        count: addresses.length,
        addresses,
    });
});

const updateAddress = asyncHandler(async (req, res) => {
    const address = await Address.findOne({ _id: req.params.id, user: req.user._id });

    if (!address) return res.status(404).json({ message: "Address not found" });

    const {
        fullName,
        phone,
        street,
        label,
        city,
        state,
        postalCode,
        country,
        isDefault,
    } = req.body;

    if (isDefault === true) {
        await Address.updateMany({ user: req.user._id }, { isDefault: false });
    }

    Object.assign(address, {
        fullName,
        phone,
        street,
        label,
        city,
        state,
        postalCode,
        country,
        isDefault,
    });

    await address.save();


    return res.status(200).json({
        message: "Address updated successfully",
        address,
    });
});

const deleteAddress = asyncHandler(async (req, res) => {
    const address = await Address.findOneAndDelete({ _id: req.params.id, user: req.user._id });

    if (!address) return res.status(404).json({ message: "Address not found" });

    return res.status(200).json({
        message: "Address deleted successfully"
    });
});

module.exports = { createAddress, getAddresses, updateAddress, deleteAddress };