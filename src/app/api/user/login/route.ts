import dbConnect from "@/app/lib/connectDB";
import { jsonRes } from "@/helpers/response";
import { userLoginService } from "@/services/user/userLogin";
import { NextRequest } from "next/server";

dbConnect();
export const POST = async (req: NextRequest) => {
    try {
        const res = await userLoginService(req);
        return jsonRes(res, res.status!);
    } catch (error: any) {
        throw new Error(error);
    }
}