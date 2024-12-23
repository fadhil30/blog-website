import { getLatestPost, getTrendingPost } from "@/utils/get-contentful-data";
import Image from "next/image";
import Link from "next/link";

export default async function LatestSection() {
  const post = await getLatestPost();
  const trendingPost = await getTrendingPost(6);

  return (
    <section className="mt-24 px-4 md:px-12">
      <div className="flex flex-col md:flex-row">
        <div className="mb-10 w-full md:mb-0 md:w-1/2">
          <h2 className="text-3xl font-bold">Latest</h2>
          <div className="mt-14 px-2 md:px-10">
            <div className="relative h-[250px] w-full md:h-[370px]">
              <Image
                src={post?.featuredImage as string}
                alt=""
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="mt-5 flex w-full gap-4 text-sm font-medium">
              <span>By</span>
              <span className="text-[#FF6666]">{post?.author as string}</span>
              <span>|</span>
              <span>{post?.date as string}</span>
            </div>
            <h3 className="mt-2 text-xl font-bold md:text-2xl">
              {post?.title as string}
            </h3>
            <p className="mt-1">{post?.description as string}</p>
            <Link href={`/blog/${post?.slug}`}>
              <button className="mt-5 w-full rounded-lg bg-[#FF5959] py-2 text-lg font-bold text-white hover:scale-105 md:w-52">
                Read more
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="m-auto flex flex-row items-center justify-between">
            <h2 className="mb-5 text-3xl font-bold">Trending Now</h2>
            <Link href="/blog">
              <span className="text-base font-medium">see all</span>
            </Link>
          </div>
          {trendingPost.map((item) => {
            return (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="group block"
              >
                <div className="m-auto flex flex-col gap-2 p-4 transition hover:bg-[#FF5959] hover:text-white">
                  <div className="flex gap-4 text-sm font-medium">
                    <span>By</span>
                    <span className="text-[#FF6666] group-hover:text-white">
                      {item.author as string}
                    </span>
                    <span>|</span>
                    <span>{item.date as string}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold">
                    {item.title as string}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
