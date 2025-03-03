import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    noOfItems: {
        type: Number,
        required: true
    }
});

export const Product = mongoose.Model('Product', productSchema);