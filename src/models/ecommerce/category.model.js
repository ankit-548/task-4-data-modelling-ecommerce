import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({});

export const Category = mongoose.Model('Category', categorySchema);