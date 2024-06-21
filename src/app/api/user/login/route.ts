import { userLoginService } from "@/services/user/userLogin";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        const res = await userLoginService(req);
        return NextResponse.json(res)
    } catch (error: any) {
        throw new Error(error)
    }
}