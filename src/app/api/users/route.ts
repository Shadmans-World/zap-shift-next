import { getUsersCollection } from "@/lib/collections";
import { NextResponse } from "next/server";

export async function GET(){
    const userCol = await getUsersCollection();
    const users = await userCol.find({}).toArray();
    
    return NextResponse.json(users);
}