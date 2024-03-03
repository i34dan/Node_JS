const mongoose = require('mongoose');

 // Séma meghatározás
 const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: false
    }
}, { timestamps: true });
 
 // Model definiálása
 const UserModel = mongoose.model('User', UserSchema);
 module.exports = UserModel;
