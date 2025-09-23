import { connectDB } from "@/lib/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import  jsonwebtoken from "jsonwebtoken"


// Database connected
await connectDB();

export async function GET(request:NextRequest) {
   try {
     
    const response = await NextResponse.json({
        message: "Logout Successfully",
        success: true
    })
     response.cookies.set("token","",{
        httpOnly:true,
        expires: new Date(0)
     })

     return response
   } catch (error:any) {
    return NextResponse.json({error:error.message},{
        status:500
    })
   }
}