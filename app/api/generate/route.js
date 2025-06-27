import connectDB from "@/lib/configureDB";
import { NextResponse } from "next/server";
import { Url } from "@/lib/models/url.model";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyz", 6);

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { shortUrl, longUrl } = body;

    if (!longUrl) {
      return NextResponse.json(
        { message: "Long URL is required", success: false },
        { status: 400 }
      );
    }

    let shortCode = shortUrl || nanoid();

    while (await Url.findOne({ shortUrl: shortCode })) {
      if (shortUrl) {
        return NextResponse.json(
          { message: "Short URL already exists", success: false },
          { status: 409 }
        );
      }
      shortCode = nanoid();
    }

    const newUrl = await Url.create({ longUrl, shortUrl: shortCode });

    return NextResponse.json(
      {
        shortUrl: newUrl.shortUrl,
        longUrl: newUrl.longUrl,
        message: "URL generated successfully",
        success: true,
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error("Error in generate URL route:", error);
    return NextResponse.json(
      { message: "Internal Server Error", success: false },
      { status: 500 }
    );
  }
}
