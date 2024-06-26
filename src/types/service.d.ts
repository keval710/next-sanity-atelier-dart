import { ObjectId } from "mongoose";

export interface DBResponse {
    _id: ObjectId,
    name: string,
    email: string,
    password: string,
    role: string,
    isVerified: boolean,
    createdAt: Date,
    updatedAt: Date,
    __V: number
}

export interface Error {
    error: {
        message: string
    }
}

export type VerificationResult = string | Error;