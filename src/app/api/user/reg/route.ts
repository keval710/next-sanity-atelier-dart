import { NextRequest, NextResponse } from "next/server";
import { userRegistrationService } from "@/services/user/userReg";
import dbConnect from "@/app/lib/connectDB";

dbConnect();
export const POST = async (req: NextRequest) => {
    const res = await userRegistrationService(req);
    return NextResponse.json(res);
}