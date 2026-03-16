const { connect } = require("@/lib/dbConnect");

const campaignsCollection = connect("campaigns");

export async function GET(request) {
  const result = await campaignsCollection.find().toArray();
  return Response.json(result);
}

export async function POST(request) {
  const data = await request.json();
  const result = await campaignsCollection.insertOne(data);
  return Response.json({ insertedId: result.insertedId });
}
