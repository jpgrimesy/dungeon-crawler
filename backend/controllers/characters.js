const jwt = require('jwt-simple');
const express = require('express')
const router = express.Router()
const db = require('../models')
const config = require('../../jwt.config.js');
const character = require('../models/character');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        try {
            const decodedToken = jwt.decode(token, config.jwtSecret);
            req.user = decodedToken;
            next();
        } catch (err) {
            res.status(401).json({ message: 'Invalid token' });
        }
    } else {
        res.status(401).json({ message: 'Missing or invalid Authorization header' });
    }
};

router.post('/', authMiddleware, (req, res) => {
    db.Character.create({
        ...req.body,
        userId: req.user.id
    })
        .then(character => res.json(character))
})
router.get('/:id', authMiddleware, (req, res) => {
    db.Character.findById({
        ...req.body,
        userId: req.user.id
    })
        .then(character => res.json(character))
})
router.put('/:id', authMiddleware, async (req, res) => {
    const userCharacter = await db.Character.findById(req.params.id)
    if (userCharacter.userId == req.user.id) {
        const updatedCharacter = await db.Character.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.json(updatedCharacter)
    } else {
        res.status(401).json({ message: 'Invalid user or token' });
    }
})


router.delete('/:id', authMiddleware, async (req, res) => {
    const userComment = await db.Character.findById(req.params.id)
    if (userComment.userId == req.user.id) {
        const deletedComment = await db.Character.findByIdAndRemove(req.params.id)
        res.send('You deleted comment ' + deletedComment._id)
    } else {
        res.status(401).json({ message: 'Invalid user or token' });
    }
})



module.exports = router