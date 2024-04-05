import { NextResponse } from "next/server";
import { data } from "@/data.json";

export async function GET(req, context) {
    const { params } = context
    const productType = data.products.filter(data => params.productType === data.type)
  return NextResponse.json(productType);
}
