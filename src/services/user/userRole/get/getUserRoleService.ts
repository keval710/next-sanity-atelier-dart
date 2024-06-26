import { isErrorResult } from "@/helpers/errorHandler";
import { verifyToken } from "@/helpers/token";
import { User } from "@/model/UserModel";
import { DBResponse } from "@/types/service";
import { NextRequest } from "next/server";

export const getUserRoleService = async (req: NextRequest) => {
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
        const user: DBResponse | null = await User.findOne({ _id: userId });
        if (user) {
            return { message: 'User role found successfully', role: user.role, status: 200 };
        } else {
            return { error: { message: 'User not found' }, status: 404 };
        }
    } catch (error: any) {
        return { error: { message: error.message || 'An unexpected error occurred' } };
    }
};
