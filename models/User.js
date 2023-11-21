const mongoose = require('mongoose');
const bcrpt = require('bcrypt');

const UserSchema = mongoose.Schema ({
    name: {
        type: String,
        required: [true, 'is required']
    },
    email: {
        type: String, 
        required: [true, 'is required'], 
        unique: true,
        index: true, 
        validate: {
            validator: function(str) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
            },
            message: props => `${props.value} is not a valid email`
        }
    },
    password: {
        type: String,
        required: [true, 'is required']
    },
    isAdmin: {
        type: Boolean,
        default: false
    }, 
    cart: {
        type: Object, 
        default: {
            total: 0,
            count: 0
        }
    },
    notifications: {
        type: Array,
        default: []
    },
    orders: [{
        type: Schema.Types.ObjectId, ref: 'Order'
    }]
}, {minimize: false});


const User = mongoose.model('User', UserSchema);

module.exports = User;