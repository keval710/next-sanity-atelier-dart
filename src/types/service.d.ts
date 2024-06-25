import { ObjectId } from "mongoose";

export interface DBResponse {
    _id: ObjectId,
    name: string,
    email: string,
    password: string,
    role: string,
    createdAt: Date,
    updatedAt: Date,
    __V: number
}