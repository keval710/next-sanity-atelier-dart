import { NextRequest } from "next/server";
import { userLoginValidation } from "./validation/validation";
import { z } from "zod";
import { User } from "@/model/UserModel";
import bcrypt from 'bcryptjs';
import { DBResponse } from "@/types/service";
import { genToken } from "@/helpers/token";
import { isErrorResult } from "@/helpers/errorHandler";

export const userLoginService = async (req: NextRequest) => {
    try {
        const inputData = await req.json();
        const validationResult = userLoginValidation.safeParse(inputData);
        // Validate the input data
        if (!validationResult.success) {
            const validationErrors = (validationResult as z.SafeParseError<typeof req>).error.issues.map(
                (issue) => ({
                    message: issue.message,
                    path: issue.path.join('.'),
                }));
            return { error: { message: 'Validation errors occurred', details: validationErrors }, status: 422 };
        }

        const { data } = validationResult;
        // Check if the user exists in the database
        const isEmailExist: DBResponse | null = await User.findOne({ email: data.email });
        if (!isEmailExist) {
            return { error: { message: 'User not found', path: 'email' }, status: 422 };
        }
        // Verify the password
        const isPassMatch = await bcrypt.compare(data.password, isEmailExist.password);
        if (!isPassMatch) {
            return { error: { message: 'Invalid password', path: 'password' }, status: 422 };
        }
        // Generate a token for the user
        const tokenResult = await genToken({ _id: isEmailExist._id.toString() });
        if (isErrorResult(tokenResult)) {
            return { error: { message: tokenResult.error.message, path: 'token' }, status: 422 };
        }
        // Successful login response
        return {
            message: 'User login successful',
            token: tokenResult
        };
    } catch (error: any) {
        return { error: { message: error.message || 'An unexpected error occurred' } };
    }
};