import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique
    }
}, { timestamps: true });

export const Category = mongoose.Model('Category', categorySchema);