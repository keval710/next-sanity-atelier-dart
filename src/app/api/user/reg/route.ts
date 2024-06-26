import { NextRequest } from "next/server";
import { emailVerification, userRegistrationService } from "@/services/user/userReg";
import dbConnect from "@/app/lib/connectDB";
import { jsonRes } from "@/helpers/response";

dbConnect();
export const POST = async (req: NextRequest) => {
    const res = await userRegistrationService(req);
    return jsonRes(res, res.status!);
}

export const GET = async (req: NextRequest) => {
    const res = await emailVerification(req);
    return jsonRes(res, res.status!);
}