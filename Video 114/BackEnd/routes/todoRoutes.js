import express from 'express'
import User from '../models/Todo.js'

const router = express.Router();

router.get("/:name", async (req, res) => {
    const name = req.params.name;
    try {
        let user = await User.findOne({ name });

        if (!user) {
            user = await User.create({ name , todos: [] });
        }

        res.json(user);
    }
    catch (error) {
        res.status(500).json({status : "failed", msg : error.message});
    }
});

router.post("/", async (req, res) => {
    try {
        const { name , todos } = req.body;

        let user = await User.findOne({ name });

        if (!user) {
            user = await User.create({ name, todos });
        }
        else {
            user.todos = todos;
            await user.save();
        }

        res.json(user);
    }
    catch (error) {
        res.status(500).json({status : "failed", msg : error.message});
    }
});

export default router;