import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
        required: true
    }
}, { timestamps: true })