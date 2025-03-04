import mongoose from 'mongoose';

const orderItemsSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        itemsOrdered: {
            type: Number,
            required: true,
            default: 0
        }
    }
)

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.orderId,
        ref: 'User'
    },
    userAddress: {
        type: String,
        required: true
    },
    orderPrice: {
        type: Number,
        required: true        
    },
    orderDetails: {
        type: [orderItemsSchema]
    },
    status: {
        type: String,
        enum: ['Pending', 'Canceled', 'Delivered'],
        default: 'Pending'
    }
});

export const Order = mongoose.Model('Order', orderSchema);