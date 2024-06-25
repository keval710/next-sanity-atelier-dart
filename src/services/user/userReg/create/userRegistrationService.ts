import { User } from "@/model/UserModel";
import { NextRequest } from "next/server";
import { z } from "zod";
import { userValidation } from "../../../user/userReg";
import bcrypt from 'bcryptjs';

export const userRegistrationService = async (req: NextRequest) => {
    try {
        const inputData = await req.json();
        const validationResult = userValidation.safeParse(inputData);
        if (validationResult.success) {
            const { data } = validationResult;
            const emailExist = await User.findOne({ email: data.email })
            if (emailExist) {
                return { error: { message: 'Email Already Exist', path: 'email' } }
            } else {
                const hashedPass = data.password && await bcrypt.hash(data.password, 12);
                const user = hashedPass && new User({
                    name: data.name,
                    email: data.email,
                    password: hashedPass,
                    role: 'user'
                });
                if (user) {
                    const savedUser = await user.save();
                    return savedUser && { message: 'user reg Successfully', savedUser };
                } else {
                    throw new Error();
                }
            }
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