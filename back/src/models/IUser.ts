import { Document } from 'mongoose';

export interface IUser extends Document {

    _id ?: string

    name ?: {
        type: string,
        trim: boolean,
        require: boolean
    },

    email?: {
        type: string,
        trim: boolean,
        require: boolean,
        createIndex: boolean 
    }

    pass?: string 
    
}