const mongoose = require('mongoose')

const CharacterSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        content: { type: String, required: true },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
    }
)

module.exports = mongoose.model('Character', CharacterSchema)
