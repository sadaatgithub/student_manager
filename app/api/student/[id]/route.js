import connectToDatabase from "@/app/lib/db";
import { ObjectId } from "mongodb";

const { NextResponse } = require("next/server");

export async function GET(request, { params }) {
    const id = params.id
    console.log(id)
    return NextResponse.json({status:200, msg:"ok",id})
}

export async function PUT(request,{params}){
    const id = params.id
    console.log(id)
    const data = await request.json()
    console.log(data)
    try {
        const client = await connectToDatabase()
        const db = client.db();
        const result = await db.collection('students').updateOne({ _id: new ObjectId(id) }, {$set: data})
        console.log(result)
        // client.close()
        return NextResponse.json({status:200, result})
      } catch (error) {
        return NextResponse.json({status:500, error})
      }

}


export async function DELETE(req,{params}){
    const id = params.id
    console.log(id)
    const isValid = ObjectId.isValid(id)
    console.log(isValid)
    try {
        const client = await connectToDatabase()
        const db = client.db();
        const result = await db.collection('students').deleteOne({_id:new ObjectId(id)})
        // client.close()
        return NextResponse.json({data:result})
      } catch (error) {
        return NextResponse.json({"msg":"OK", error})
      }
}