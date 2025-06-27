import {
  ArrowRight,
  Facebook,
  Info,
  Instagram,
  Link2,
  TrendingUp,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="flex max-w-[90vw] mx-auto min-h-[calc(100vh-84px)] items-center justify-center py-8 p-2 sm:p-4 md:p-6 lg:p-8">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-extrabold tracking-tight text-2xl sm:text-3xl lg:text-4xl text-blue-500 flex items-center gap-2 mb-5 border-b border-blue-500">
            <span>BitLinks</span>{" "}
            <span className="mt-1">
              <Link2  className="size-6 sm:size-7.5 lg:size-9" />
            </span>
          </h2>
          <h3 className="font-extrabold tracking-tight text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center ">
            Simplify Your URLs, Amplify Your Reach
          </h3>
          <p className="text-base-content mt-4 max-w-[80vw] text-xs sm:text-sm md:max-w-[70vw] lg:max-w-[50vw] lg:[text-md] text-center">
            Turn long, messy links into clean, shareable BitLinks. Fast,
            reliable, and trackable — perfect for personal use, businesses, and
            creators who value clarity and clicks.
          </p>
          <div className="mt-6 flex justify-center items-center gap-3">
           <Link href={'/generate'}>
              <button
                type="button"
                className="btn btn-sm sm:btn-md inline-flex justify-center items-center gap-2 rounded-full bg-blue-700 hover:bg-blue-800 duration-300 "
              >
                <span> Get Started</span>
              </button>
           </Link>

            <button
              type="button"
              className="btn bg-purple-700 hover:bg-purple-800 duration-300 rounded-full btn-sm sm:btn-md"
            >
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
