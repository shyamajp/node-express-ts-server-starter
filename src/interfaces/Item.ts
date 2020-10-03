import mongoose from 'mongoose';

export interface IItem {
    _id: mongoose.Types.ObjectId;
    name: string;
}