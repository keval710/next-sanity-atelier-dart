import { isErrorResult } from "@/helpers/errorHandler";
import { verifyToken } from "@/helpers/token";
import { User } from "@/model/UserModel";
import { DBResponse } from "@/types/service";
import { NextRequest } from "next/server";

export const emailVerification = async (req: NextRequest) => {
    try {
        const url = new URL(req.url);
        const token = url.searchParams.get('token');

        if (!token) {
            return { error: { message: 'Please provide token in params' }, status: 422 };
        }
        const verificationResult = await verifyToken(token);
        if (isErrorResult(verificationResult)) {
            return { error: { message: verificationResult.error.message }, status: 400 };
        }

        const userId = verificationResult as string;
        const verifiedUser: DBResponse | null = await User.findByIdAndUpdate(
            { _id: userId },
            { $set: { isVerified: true } },
            { new: true }
        );
        if (verifiedUser) {
            return { message: 'User verified successfully', user: verifiedUser, status: 200 };
        } else {
            return { error: { message: 'User not verified' }, status: 404 };
        }
    } catch (error: any) {
        return { error: { message: error.message || 'An unexpected error occurred during registration' } };
    }
}