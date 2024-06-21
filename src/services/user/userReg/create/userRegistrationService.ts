import { User } from "@/model/UserModel";
import { NextRequest } from "next/server";
import { z } from "zod";
import { userValidation } from "../../../user/userReg";

export const userRegistrationService = async (req: NextRequest) => {
    try {
        const inputData = await req.json();
        const validationResult = userValidation.safeParse(inputData);
        if (validationResult.success) {
            const user = new User(validationResult.data);
            const savedUser = await user.save();
            return savedUser && { message: 'user reg Successfully', savedUser };
        } else {
            const valErrors = (validationResult as z.SafeParseError<typeof req>).error.issues.map((issue) => ({
                message: issue.message,
                path: issue.path.join('.'),
            }));
            return valErrors;
        }
    } catch (error: any) {
        throw new Error(error)
    }
}