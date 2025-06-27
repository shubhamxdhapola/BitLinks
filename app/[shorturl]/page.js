import { Url } from "@/lib/models/url.model";
import connectDB from "@/lib/configureDB";
import { redirect } from "next/navigation";
import { notFound } from "next/navigation";

const ShortUrl = async ({ params }) => {
    const { shorturl } = await params;
    await connectDB();
    const shortUrl = await Url.findOne({ shortUrl: shorturl });
    shortUrl ? redirect(shortUrl.longUrl) : notFound();
};

export default ShortUrl;
