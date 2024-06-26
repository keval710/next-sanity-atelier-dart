import { User } from "@/model/UserModel";
import { NextRequest } from "next/server";
import { z } from "zod";
import { userValidation } from "../../../user/userReg";
import bcrypt from 'bcryptjs';
import { isErrorResult } from "@/helpers/errorHandler";
import { genToken } from "@/helpers/token";
import { emailVerification } from "@/helpers/mail";

export const userRegistrationService = async (req: NextRequest) => {
    try {
        const inputData = await req.json();
        const validationResult = userValidation.safeParse(inputData);
        // Handle validation errors
        if (!validationResult.success) {
            const validationErrors = (validationResult as z.SafeParseError<typeof req>).error.issues.map((issue) => ({
                message: issue.message,
                path: issue.path.join('.'),
            }));
            return { error: { message: 'Validation failed', details: validationErrors }, status: 422 };
        }

        const { data } = validationResult;
        // Check if the email already exists in the database
        const emailExist = await User.findOne({ email: data.email });
        if (emailExist) {
            return { error: { message: 'Email already exists', path: 'email' }, status: 422 };
        }
        // Hash the password
        const hashedPass = await bcrypt.hash(data.password, 12);
        // Create a new user
        const newUser = new User({
            name: data.name,
            email: data.email,
            password: hashedPass
        });
        // Save the new user to the database
        const savedUser = newUser && await newUser.save();
        const tokenResult = await genToken({ _id: savedUser._id.toString() });
        if (isErrorResult(tokenResult)) {
            return { error: { message: tokenResult.error.message, path: 'token' }, status: 422 };
        }
        emailVerification(savedUser.email, tokenResult, savedUser.name);
        return {
            message: 'User registered successfully',
            user: savedUser,
            token: tokenResult,
            status: 201
        };
    } catch (error: any) {
        return { error: { message: error.message || 'An unexpected error occurred during registration' } };
    }
}