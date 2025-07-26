import { Link2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="flex max-w-[95vw] md:max-w-[90vw] mx-auto min-h-[calc(100vh-84px)] md:items-center justify-center py-8 p-2 sm:p-4 md:p-6 lg:p-8 break-words">
        <div className="flex flex-col items-start justify-center md:items-center">
          <h2 className="font-extrabold tracking-tight text-2xl sm:text-3xl lg:text-4xl text-blue-500 flex items-center gap-2 mb-5 border-b border-blue-500">
            <span>BitLinks</span>{" "}
            <span className="mt-1">
              <Link2 className="size-6 sm:size-7.5 lg:size-9" />
            </span>
          </h2>
          <h3 className="font-extrabold tracking-tight text-5xl md:text-5xl lg:text-6xl text-left md:text-center leading-12 md:leading-14 lg:leading-18">
            Simplify Your URLs, Amplify Your Reach Effortlessly
          </h3>
          <p className="text-base-content mt-4 text-xs sm:text-sm md:max-w-[70vw] lg:max-w-[50vw] lg:text-md text-justify md:text-center">
            Turn long, messy links into clean, shareable BitLinks. Fast,
            reliable, and trackable — perfect for personal use, businesses, and
            creators who value clarity and clicks.
          </p>
          <div className="mt-6 flex justify-start md:justify-center items-center gap-3">
            <Link href={"/generate"}>
              <button
                type="button"
                className="btn inline-flex justify-center items-center gap-2 rounded-full bg-blue-700 hover:bg-blue-800 duration-300 "
              >
                <span> Get Started</span>
              </button>
            </Link>

            <button
              type="button"
              className="btn bg-purple-700 hover:bg-purple-800 duration-300 rounded-full"
            >
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
