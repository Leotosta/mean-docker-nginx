import { Schema, model } from 'mongoose';
import { IUser } from '../../models/IUser';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        require: true
    },

    email: {
        type: String,
        trim: true,
        require: true,
        createIndex: true
    }, 

    pass: String

}, {
    timestamps: true
});

UserSchema.pre<IUser>('save', async function (next) {
    try {
        const hash = await bcrypt.hash(this.pass, 12)

        this.pass = hash;

        next();

    } catch(e) {
        console.log(e)
    }
})

const User = model<IUser>('User', UserSchema);

export default User;