const Contact = require("../models/Contact");

exports.sendMessage = async (req, res) => {
    try {
        const message = await Contact.create(req.body);

        res.status(201).json(message);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};