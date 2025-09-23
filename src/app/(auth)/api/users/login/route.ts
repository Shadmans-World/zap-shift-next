import { connectDB } from "@/lib/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import  jsonwebtoken from "jsonwebtoken"


// Database connected
await connectDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log(reqBody);
    const user = await User.findOne({
      email: email,
    });

    if (!user) {
      return NextResponse.json(
        { error: "User Not Found" },
        {
          status: 400,
        }
      );
    }

    console.log("User Exists");

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { error: "Check your credentials" },
        {
          status: 400,
        }
      );
    }

    // JWT
    const tokenData = {
        id : user._id,
        userName: user.userName,
        email:user.email
    };

    const token = jsonwebtoken.sign(tokenData, process.env.TOKEN_SECRET as string, {expiresIn: '1h'})
    
    const response = NextResponse.json({
        message: "Logged In Successfully",
        success: true
    })

    // cookies set 
    response.cookies.set("token",token,{
        httpOnly:true
    })
    return response

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      {
        status: 500,
      }
    );
  }
}
