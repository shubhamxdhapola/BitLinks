"use client";

import { Copy, Files, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const Generate = () => {
  const defaultFormData = {
    longUrl: "",
    shortUrl: "",
  };

  const [formData, setFormData] = useState(defaultFormData);
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!formData.longUrl.trim()) return toast.error("Long URL is required");
    generateUrl();
  };

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_HOST}/${generatedUrl}`
    );
    toast.success("Copied to clipboard");
  };

  async function generateUrl() {
    setLoading(true);
    await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.success) {
          setGeneratedUrl(data.shortUrl);
          setFormData(defaultFormData);
          toast.success("URL generated successfully");
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.data.message);
        setLoading(false);
      });
  }

  return (
    <div className="min-h-[calc(100vh-84px)] flex flex-col justify-center items-center py-8 p-2 sm:p-4 md:p-6 lg:p-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-center">
        Trim the Clutter, Keep the Clicks
      </h2>
      <form onSubmit={handleOnSubmit} className="w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[50vw]">
        <div className="mb-4">
          <label htmlFor="long-url" className="text-xs sm:text-sm">
            Enter long URL
          </label>
          <input
            type="text"
            placeholder="Enter the full link you want to shorten"
            className="input text-xs sm:text-sm mt-1 bg-base-200 w-full"
            name="longUrl"
            id="long-url"
            value={formData.longUrl}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="preferred-url" className="text-xs sm:text-sm mb-1">
            {" "}
            Enter preferred URL (optional)
          </label>
          <input
            type="text"
            placeholder="Customize your short link (e.g. yourname)"
            className="input text-xs sm:text-sm mt-1 bg-base-200 w-full"
            name="shortUrl"
            id="preferred-url"
            value={formData.shortUrl}
            onChange={handleOnChange}
          />
        </div>
        <button
          className={`bg-blue-700 btn btn-sm sm:btn-md w-full mt-6 sm:mt-8 rounded ${
            loading && "btn-disabled"
          }`}
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={20} />{" "}
              <span>Generating...</span>{" "}
            </>
          ) : (
            "Generate URL"
          )}
        </button>
      </form>

      {generatedUrl && (
        <div className="mt-10 w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[50vw]">
          <div className="text-center p-4 flex items-center justify-center">
            <hr className="flex-grow border-t-1 border-primary" />
            <span className="text-sm sm:text-base mx-4">Here's you shortned URL</span>
            <hr className="flex-grow border-t-1 border-primary" />
          </div>
          <div className="mt-4 flex justify-center items-center gap-3 w-full">
            <div className="input w-full text-xs sm:text-base">
              <Link
                className="hover:text-blue-500 duration-300"
                href={`${process.env.NEXT_PUBLIC_HOST}/${generatedUrl}`}
                target="_blank"
              >
                {`${process.env.NEXT_PUBLIC_HOST}/${generatedUrl}`}
              </Link>
            </div>
            <button
              className="btn  rounded bg-blue-700"
              onClick={handleCopyLink}
            >
              <Files className="size-5 sm:size-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Generate;
