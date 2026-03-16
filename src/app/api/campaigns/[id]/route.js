import { connect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

const campaignscollection = connect("campaigns");

export async function GET(request, { params }) {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const result = await campaignscollection.findOne(query);
  return Response.json(result);
}

export async function DELETE(req, { params }) {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const result = await campaignscollection.deleteOne(query);
  return Response.json(result);
}
