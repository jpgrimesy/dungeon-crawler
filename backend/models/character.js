const mongoose = require('mongoose')

const CharacterSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        race: { type: String, required: true },
        class: { type: String, required: true },
        proficiencies: [[String]],
        languages: [[String]],
        dex: Number,
        con: Number,
        str: Number,
        wis: Number,
        int: Number,
        cha: Number,
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
    }
)

module.exports = mongoose.model('Character', CharacterSchema)
