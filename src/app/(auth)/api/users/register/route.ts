import { connectDB } from "@/lib/dbConfig";
import User from "@/models/userModel";
import {NextRequest,NextResponse} from 'next/server'
import bcrypt from 'bcryptjs'
import { sendEmail } from "@/helpers/mailer";

connectDB(); // database connected

interface reqBodyInfo {
    userName: string;
    email: string;
    password:string;
    role:string;
}

export async function POST(request:NextRequest){
    try {
        const reqBody =await request.json();
        const {userName,email,password, role}= reqBody; 
        // validation
        console.log(reqBody)


        const user =await  User.findOne({email})
        if(user){
            return NextResponse.json({error:'User already exists'},{status:500})
        }

        const salt =await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

       const newUser =  new User({
            userName,
            email,
            password: hashedPassword,
            role
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        // send verification email
        await sendEmail({email, emailType:"VERIFY", userId:savedUser._id as string})

        return NextResponse.json({
            message: "User registered successfully",
            success: true,
            savedUser
        })

    } catch (error:any) {
        return NextResponse.json({error:error.message},{
            status:500}
        )
    }
}