require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });


const mongoose = require("mongoose");
const { connectDB } = require("./config/db.config.js");


const User = require("./models/user.model.js");
// const Address = require("./models/address.model.js");
const Category = require("./models/category.model.js");
const Product = require("./models/product.model.js");
// const Cart = require("./models/cart.model.js");
// const Order = require("./models/order.model.js");
// const Review = require("./models/review.model.js");
// const Coupon = require("./models/coupon.model.js");


const categories = [
    {
        name: "Electronics",
        slug: "electronics",
        description: "Electronic devices and accessories",
    },
    {
        name: "Clothing",
        slug: "clothing",
        description: "Everyday fashion and apparel",
    },
    {
        name: "Footwear",
        slug: "footwear",
        description: "Shoes and footwear for every occasion",
    },
    {
        name: "Accessories",
        slug: "accessories",
        description: "Fashion and lifestyle accessories",
    },
    {
        name: "Home & Living",
        slug: "home-living",
        description: "Products for your home and everyday living",
    },
    {
        name: "Beauty & Personal Care",
        slug: "beauty-personal-care",
        description: "Beauty, grooming, and personal care products",
    },
];


const seedData = async () => {
    try {
        await connectDB();
        console.log("Database connected. Seeder is ready.");


        for (const category of categories) {
            await Category.findOneAndUpdate(
                { slug: category.slug },
                { $set: category },
                { upsert: true, new: true, runValidators: true }
            );
        }

        console.log("Categories seeded successfully.");

        const savedCategories = await Category.find({
            slug: { $in: categories.map((category) => category.slug) },
        });

        const categoryMap = Object.fromEntries(
            savedCategories.map((category) => [category.slug, category._id])
        );

        console.log("Category references prepared.");


        const products = [
            // Electronics
            {
                name: "Wireless Headphones",
                slug: "wireless-headphones",
                description: "Comfortable wireless headphones with clear sound.",
                category: categoryMap["electronics"],
                price: 89.99,
                salePrice: 79.99,
                stock: 25,
                images: ["https://placehold.co/600x600?text=Headphones"],
            },
            {
                name: "Smart Watch",
                slug: "smart-watch",
                description: "Smart watch with fitness tracking features.",
                category: categoryMap["electronics"],
                price: 129.99,
                stock: 18,
                images: ["https://placehold.co/600x600?text=Smart+Watch"],
            },
            {
                name: "Bluetooth Speaker",
                slug: "bluetooth-speaker",
                description: "Portable speaker with rich sound.",
                category: categoryMap["electronics"],
                price: 59.99,
                stock: 30,
                images: ["https://placehold.co/600x600?text=Speaker"],
            },
            {
                name: "Mechanical Keyboard",
                slug: "mechanical-keyboard",
                description: "Mechanical keyboard for work and gaming.",
                category: categoryMap["electronics"],
                price: 74.99,
                stock: 15,
                images: ["https://placehold.co/600x600?text=Keyboard"],
            },

            // Clothing
            {
                name: "Classic T-Shirt",
                slug: "classic-t-shirt",
                description: "Everyday cotton T-shirt.",
                category: categoryMap["clothing"],
                price: 19.99,
                stock: 50,
                images: ["https://placehold.co/600x600?text=T-Shirt"],
            },
            {
                name: "Denim Jacket",
                slug: "denim-jacket",
                description: "Classic denim jacket for everyday wear.",
                category: categoryMap["clothing"],
                price: 69.99,
                stock: 20,
                images: ["https://placehold.co/600x600?text=Jacket"],
            },
            {
                name: "Hoodie",
                slug: "hoodie",
                description: "Soft hoodie for cooler days.",
                category: categoryMap["clothing"],
                price: 44.99,
                stock: 35,
                images: ["https://placehold.co/600x600?text=Hoodie"],
            },
            {
                name: "Casual Shirt",
                slug: "casual-shirt",
                description: "Versatile shirt for casual occasions.",
                category: categoryMap["clothing"],
                price: 34.99,
                stock: 28,
                images: ["https://placehold.co/600x600?text=Shirt"],
            },

            // Footwear
            {
                name: "Running Shoes",
                slug: "running-shoes",
                description: "Lightweight shoes for daily running.",
                category: categoryMap["footwear"],
                price: 89.99,
                stock: 22,
                images: ["https://placehold.co/600x600?text=Running+Shoes"],
            },
            {
                name: "Casual Sneakers",
                slug: "casual-sneakers",
                description: "Comfortable sneakers for everyday use.",
                category: categoryMap["footwear"],
                price: 64.99,
                stock: 30,
                images: ["https://placehold.co/600x600?text=Sneakers"],
            },
            {
                name: "Leather Boots",
                slug: "leather-boots",
                description: "Durable boots with a classic design.",
                category: categoryMap["footwear"],
                price: 119.99,
                stock: 12,
                images: ["https://placehold.co/600x600?text=Boots"],
            },
            {
                name: "Slides",
                slug: "slides",
                description: "Easy-to-wear slides for daily comfort.",
                category: categoryMap["footwear"],
                price: 24.99,
                stock: 40,
                images: ["https://placehold.co/600x600?text=Slides"],
            },

            // Accessories
            {
                name: "Leather Wallet",
                slug: "leather-wallet",
                description: "Compact wallet for everyday essentials.",
                category: categoryMap["accessories"],
                price: 29.99,
                stock: 25,
                images: ["https://placehold.co/600x600?text=Wallet"],
            },
            {
                name: "Classic Sunglasses",
                slug: "classic-sunglasses",
                description: "Timeless sunglasses with UV protection.",
                category: categoryMap["accessories"],
                price: 39.99,
                stock: 32,
                images: ["https://placehold.co/600x600?text=Sunglasses"],
            },
            {
                name: "Wrist Watch",
                slug: "wrist-watch",
                description: "Minimal wrist watch for everyday style.",
                category: categoryMap["accessories"],
                price: 79.99,
                stock: 16,
                images: ["https://placehold.co/600x600?text=Watch"],
            },
            {
                name: "Travel Backpack",
                slug: "travel-backpack",
                description: "Spacious backpack for travel and work.",
                category: categoryMap["accessories"],
                price: 54.99,
                stock: 20,
                images: ["https://placehold.co/600x600?text=Backpack"],
            },

            // Home & Living
            {
                name: "Desk Lamp",
                slug: "desk-lamp",
                description: "Modern lamp for your workspace.",
                category: categoryMap["home-living"],
                price: 34.99,
                stock: 18,
                images: ["https://placehold.co/600x600?text=Lamp"],
            },
            {
                name: "Ceramic Mug",
                slug: "ceramic-mug",
                description: "Simple ceramic mug for hot drinks.",
                category: categoryMap["home-living"],
                price: 12.99,
                stock: 60,
                images: ["https://placehold.co/600x600?text=Mug"],
            },
            {
                name: "Throw Pillow",
                slug: "throw-pillow",
                description: "Decorative pillow for your living space.",
                category: categoryMap["home-living"],
                price: 22.99,
                stock: 35,
                images: ["https://placehold.co/600x600?text=Pillow"],
            },
            {
                name: "Water Bottle",
                slug: "water-bottle",
                description: "Reusable bottle for home and travel.",
                category: categoryMap["home-living"],
                price: 18.99,
                stock: 45,
                images: ["https://placehold.co/600x600?text=Bottle"],
            },

            // Beauty & Personal Care
            {
                name: "Face Cleanser",
                slug: "face-cleanser",
                description: "Gentle daily facial cleanser.",
                category: categoryMap["beauty-personal-care"],
                price: 14.99,
                stock: 40,
                images: ["https://placehold.co/600x600?text=Cleanser"],
            },
            {
                name: "Moisturizing Cream",
                slug: "moisturizing-cream",
                description: "Daily moisturizing cream.",
                category: categoryMap["beauty-personal-care"],
                price: 19.99,
                stock: 30,
                images: ["https://placehold.co/600x600?text=Cream"],
            },
            {
                name: "Hair Brush",
                slug: "hair-brush",
                description: "Everyday hair brush for easy styling.",
                category: categoryMap["beauty-personal-care"],
                price: 9.99,
                stock: 50,
                images: ["https://placehold.co/600x600?text=Brush"],
            },
            {
                name: "Body Lotion",
                slug: "body-lotion",
                description: "Moisturizing lotion for daily care.",
                category: categoryMap["beauty-personal-care"],
                price: 16.99,
                stock: 38,
                images: ["https://placehold.co/600x600?text=Lotion"],
            },
        ];

        for (const product of products) {
            await Product.findOneAndUpdate(
                { slug: product.slug },
                { $set: product },
                { upsert: true, new: true, runValidators: true }
            );
        }

        console.log(`${products.length} products seeded successfully.`);


        const seedUsers = [
            {
                name: process.env.SEED_ADMIN_NAME,
                email: process.env.SEED_ADMIN_EMAIL,
                password: process.env.SEED_ADMIN_PASSWORD,
                role: "admin",
            },
            {
                name: process.env.SEED_CUSTOMER_NAME,
                email: process.env.SEED_CUSTOMER_EMAIL,
                password: process.env.SEED_CUSTOMER_PASSWORD,
                role: "customer",
            },
        ];

        for (const userData of seedUsers) {
            const { name, email, password, role } = userData;

            if (!name || !email || !password) {
                throw new Error(`Missing seed credentials for ${role}`);
            }

            const existingUser = await User.findOne({ email });

            if (!existingUser) {
                await new User({ name, email, password, role }).save();
                console.log(`${role} account created.`);
            } else {
                console.log(`${role} account already exists; skipped.`);
            }
        }

    } catch (err) {
        console.log("Seeder Failed: ", err.message);
        process.exitCode = 1;
    } finally {
        await mongoose.connection.close();
    }
};



const destroyData = async () => {
    try {
        await connectDB();

        const categorySlugs = [
            "electronics",
            "clothing",
            "footwear",
            "accessories",
            "home-living",
            "beauty-personal-care",
        ];

        const productSlugs = [
            "wireless-headphones",
            "smart-watch",
            "bluetooth-speaker",
            "mechanical-keyboard",
            "classic-t-shirt",
            "denim-jacket",
            "hoodie",
            "casual-shirt",
            "running-shoes",
            "casual-sneakers",
            "leather-boots",
            "slides",
            "leather-wallet",
            "classic-sunglasses",
            "wrist-watch",
            "travel-backpack",
            "desk-lamp",
            "ceramic-mug",
            "throw-pillow",
            "water-bottle",
            "face-cleanser",
            "moisturizing-cream",
            "hair-brush",
            "body-lotion",
        ];

        const seedEmails = [
            process.env.SEED_ADMIN_EMAIL,
            process.env.SEED_CUSTOMER_EMAIL,
        ].filter(Boolean);

        await Product.deleteMany({ slug: { $in: productSlugs } });
        await Category.deleteMany({ slug: { $in: categorySlugs } });
        await User.deleteMany({ email: { $in: seedEmails } });

        console.log("Seed data removed successfully.");
    } catch (error) {
        console.error("Destroy failed:", error.message);
        process.exitCode = 1;
    } finally {
        await mongoose.connection.close();
    }
};

if (process.argv.includes("--destroy")) {
    destroyData();
} else {
    seedData();
}