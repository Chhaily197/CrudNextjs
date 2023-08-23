import connectMongoDB from "@/app/libs/mongodb";
import User from "@/models/user";
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){

     const { user, email, password } = await req.json();
     const hashedPassword = await bcrypt.hash(password, 10);
     await connectMongoDB();

     const existEmail = await User.findOne({ email });
     if(existEmail){
          return NextResponse.json({message: "Email already registered"});
     }

     await User.create({user, email, password:hashedPassword });
     return NextResponse.json({message: "User registered successfully"}, { status: 201});

}