import { NextRequest } from "next/server";
import { userLoginValidation } from "./validation/validation";
import { z } from "zod";
import { User } from "@/model/UserModel";

export const userLoginService = async (req: NextRequest) => {
    try {
        const inputData = await req.json();
        const validationResult = userLoginValidation.safeParse(inputData);

        if (validationResult.success) {
            const isEmailExist = await User.findOne({
                email: validationResult.data.email
            });
            return isEmailExist ? { message: 'User Login Successfully' } : { error: "user not found" }
        } else {
            const valErrors = (validationResult as z.SafeParseError<typeof req>).error.issues.map((issue) => ({
                message: issue.message,
                path: issue.path.join('.'),
            }));
            return valErrors;
        }
    } catch (error: any) {
        throw new Error(error);
    }
}