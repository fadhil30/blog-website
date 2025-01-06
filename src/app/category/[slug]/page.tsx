import HeroSection from "@/components/heroSection";
import { getAllBlogPost } from "@/utils/get-contentful-data";
import Image from "next/image";
import Link from "next/link";

export default async function categoriesSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const posts = await getAllBlogPost({});
  const filteredPosts = posts?.filter((post) =>
    post?.categories?.some((item) => item.fields.slug === slug),
  );
  return (
    <section className="min-h-screen">
      <HeroSection />
      <div className="px-4 md:px-12">
        <h1 className="mt-14 text-3xl font-semibold md:text-5xl">
          Category
          <span> {slug.toUpperCase()}</span>
        </h1>
        <hr className="mt-8" />
        <div>
          {filteredPosts?.map((post) => {
            return (
              <article key={post.slug as string} className="mt-10">
                <div className="flex flex-row">
                  <div className="relative h-[350px] w-[500px]">
                    <Image
                      src={post.thumbnailImage}
                      alt="Blog Image"
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex flex-grow flex-col p-5">
                    <h4 className="text-xl font-bold">
                      {post.title as string}
                    </h4>
                    <div className="mt-6 flex flex-row items-center gap-2">
                      <div className="relative h-[50px] w-[50px] overflow-hidden rounded-full">
                        <Image
                          src={post.authorImage}
                          alt="Author Image"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">
                          {post.author as string}
                        </span>
                        <span className="text-sm text-gray-500">
                          {post.date as string}
                        </span>
                      </div>
                    </div>
                    <p className="mt-4 flex-grow text-base">
                      {post.description as string}
                    </p>
                    <Link href={`/blog/${post.slug}`}>
                      <button className="mt-4 w-[192px] rounded-lg bg-[#FF5959] py-2 text-sm font-bold text-white transition hover:scale-105">
                        Read full article...
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
