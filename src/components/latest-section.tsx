import { getLatestPost, getTrendingPost } from "@/utils/get-contentful-data";
import Image from "next/image";
import Link from "next/link";

export default async function LatestSection() {
  const post = await getLatestPost();
  const trendingPost = await getTrendingPost(4);

  return (
    <section className="mt-24 px-12">
      <div className="flex flex-row">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold">Latest</h2>
          <div className="mt-14 px-10">
            <div className="relative h-[370px] w-full">
              <Image
                src={post?.featuredImage as string}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-5 flex w-64 justify-between text-sm font-medium">
              <span>By</span>
              <span className="text-[#FF6666]">{post?.author as string}</span>
              <span>|</span>
              <span>{post?.date as string}</span>
            </div>
            <h3 className="mt-2 text-2xl font-bold">{post?.title as string}</h3>
            <p className="mt-1">{post?.description as string}</p>
            <Link href={`/blog/${post?.slug}`}>
              <button className="mt-5 w-52 rounded-lg bg-[#FF5959] py-2 text-lg font-bold text-white">
                Read more
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2">
          <div className="m-auto flex flex-row justify-between">
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
                className="group"
              >
                <div className="m-auto flex flex-col gap-2 p-8 group-hover:bg-[#FF5959] group-hover:text-white">
                  <div className="flex w-64 justify-between text-sm font-medium">
                    <span>By</span>
                    <span className="text-[#FF6666] group-hover:text-white">
                      {item.author as string}
                    </span>
                    <span>|</span>
                    <span>{item.date as string}</span>
                  </div>
                  <h3 className="mt-2 text-2xl font-semibold">
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
