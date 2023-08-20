import connetMongoDB from "@/app/libs/mongodb";
import Topic from "@/models/topic";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, { params }: { params: { id: string }}){
     const { id } = params;
     const { newTitle: title, newDescription: descritption } = await req.json();
     await connetMongoDB();
     await Topic.findByIdAndUpdate(id, {title, descritption});
     return NextResponse.json({message: "Topic updated"}, { status: 200});
}

export async function GET(req: NextRequest, { params }: {params: {id: string}}){
     const {id} = params;
     await connetMongoDB();
     const topic = await Topic.findOne({_id: id});
     return NextResponse.json({ topic }, { status:  200});
}
