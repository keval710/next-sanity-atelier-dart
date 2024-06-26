import dbConnect from "@/app/lib/connectDB";
import { jsonRes } from "@/helpers/response";
import { getUserRoleService } from "@/services/user/userRole";
import { NextRequest } from "next/server";

dbConnect();
export const GET = async (req: NextRequest) => {
    const res = await getUserRoleService(req);
    return jsonRes(res, res.status!);
}