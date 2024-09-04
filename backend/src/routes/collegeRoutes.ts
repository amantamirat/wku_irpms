import { Router } from 'express';
import College from '../models/College';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const colleges = await College.find();
        res.status(200).json({ data: colleges });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const college = await College.findById(req.params.id);
        if (!college) {
            return res.status(404).json({ message: 'College not found' });
        }
        res.status(200).json(college);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const { name } = req.body;
        const newCollege = new College({ name });
        await newCollege.save();
        res.status(201).json(newCollege);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

router.put('/:id', async (req, res) => {
    try {
        //here add current_dean and current coordinator
        const { name } = req.body;
        const college = await College.findByIdAndUpdate(req.params.id, { name }, { new: true });
        if (!college) {
            return res.status(404).json({ message: 'College not found' });
        }
        res.status(200).json(college);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        //check for forign key and protect
        const college = await College.findByIdAndDelete(req.params.id);
        if (!college) {
            return res.status(404).json({ message: 'College not found' });
        }
        res.status(200).json({ message: 'College deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

export default router;
