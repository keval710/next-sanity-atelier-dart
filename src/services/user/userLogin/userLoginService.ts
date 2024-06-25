import { NextRequest } from "next/server";
import { userLoginValidation } from "./validation/validation";
import { z } from "zod";
import { User } from "@/model/UserModel";
import bcrypt from 'bcryptjs';
import { DBResponse } from "@/types/service";
import { genToken } from "@/helpers/Token";

export const userLoginService = async (req: NextRequest) => {
    try {
        const inputData = await req.json();
        const validationResult = userLoginValidation.safeParse(inputData);
        if (validationResult.success) {
            const { data } = validationResult
            const isEmailExist: DBResponse | null = await User.findOne({
                email: data.email
            });
            if (isEmailExist) {
                const isPassMatch = isEmailExist && await bcrypt.compare(data.password, isEmailExist.password);
                const token = await genToken({ _id: (isEmailExist._id).toString() });
                return isEmailExist && isPassMatch && token
                    ? { message: 'User Login Successfully', token }
                    : { error: { message: 'provide valid password', path: 'password' } };
            } else {
                return { error: { message: 'User Not Found', path: 'email' } }
            }
        } else {
            const valErrors = (validationResult as z.SafeParseError<typeof req>).error.issues.map((issue) => ({
                message: issue.message,
                path: issue.path.join('.'),
            }));
            return valErrors;
        }
    } catch (error: any) {
        throw new Error(error.message);
    }
}