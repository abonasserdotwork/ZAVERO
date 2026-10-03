const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth.middleware.js");

const { createAddress, getAddresses, updateAddress, deleteAddress } = require("../controllers/address.controller.js")

router.use(protect);



router.route("/")
    .post(createAddress)
    .get(getAddresses);


router.route("/:id")
    .put(updateAddress)
    .delete(deleteAddress);


module.exports = router;