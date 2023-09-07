const { NextResponse } = require("next/server");
import connectToDatabase from '@/app/lib/db';

// mongodb+srv://sadachoudharii:<password>@cluster0.ghtuplo.mongodb.net/student?retryWrites=true&w=majority
// xYuKdHB9G0vGdzJ8 
const uri = 'mongodb+srv://sadachoudharii:xYuKdHB9G0vGdzJ8@cluster0.ghtuplo.mongodb.net/student?retryWrites=true&w=majority';


export async function GET() {

  try {
    const client = await connectToDatabase()
    const db = client.db();

    // Assuming your collection is named 'students', you can query all documents.
    const data = await db.collection('students').find().toArray();
    // console.log(data)
    // client.close()
    return NextResponse.json({status:200, data})
  } catch (error) {
    return NextResponse.json({status:500, error})
    
  }
     
}


export async function POST(req,res){
  const data = await req.json()
console.log(data)

  try {
    const client = await connectToDatabase()
    const db = client.db();
    const result = await db.collection('students').insertOne(data)
    // client.close()
    return NextResponse.json({status:201, result})
  } catch (error) {
    return NextResponse.json({status:500, error})
  }
}