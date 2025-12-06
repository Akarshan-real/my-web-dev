import express from 'express'
import User from '../models/Todo.js'

const router = express.Router()

router.get("/:name", async (req, res) => {
    try {
        const user = await User.findOne({ name: req.params.name });

        if (!user) {
            User.create({ name: name, todos: [] });
            res.json({ msg: `${name} user created` })
        }
        else {
            res.json(User);
        }
    }
    catch (error) {
        res.status(500).json({ status: "failed", msg: "Failed to get name" }, error);
    }
})