import connetMongoDB from "@/app/libs/mongodb";
import User from "@/models/user";
import bctypt from 'bcrypt'
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest } from "next";

export async function POST(req: NextRequest){
     const { email, password } = await req.json();
     await connetMongoDB();
     const user = await User.findOne({ email });

     if(!user || !(await bctypt.compare(password, user.password))){
          return NextResponse.json({message: "Invalid credentials"}, {status: 401});
     }

     return NextResponse.json({message: 'Login successfully.'}, {status: 200});
}
