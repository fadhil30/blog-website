import HeroSection from "@/components/heroSection";
import { getAllBlogPost } from "@/utils/get-contentful-data";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await getAllBlogPost({});

  return (
    <section>
      <HeroSection />
      <div className="px-4 md:px-12">
        <h1 className="mt-14 text-3xl font-semibold md:text-5xl">All Posts</h1>
        <hr className="my-8" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts?.map((item) => {
            return (
              <div
                key={item.slug as string}
                className="flex flex-col rounded-lg bg-white shadow-lg"
              >
                <div className="relative h-[350px] w-full">
                  <Image
                    src={item.thumbnailImage}
                    alt="Thumbnail Image"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex flex-grow flex-col p-5">
                  <h4 className="text-xl font-bold">{item?.title as string}</h4>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="relative h-[50px] w-[50px] overflow-hidden rounded-full">
                      <Image
                        src={item.authorImage}
                        alt="Profile Picture"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">
                        {item?.author as string}
                      </span>
                      <span className="text-sm text-gray-500">
                        {item.date as string}
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 flex-grow text-base">
                    {item.description as string}
                  </p>
                  <Link href={`/blog/${item.slug}`}>
                    <button className="mt-4 w-full rounded-lg bg-[#FF5959] py-2 text-sm font-bold text-white transition hover:scale-105">
                      Read full article...
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
