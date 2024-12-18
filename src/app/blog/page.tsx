import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import { getAllBlogPost } from "@/utils/get-contentful-data";
import Image from "next/image";
import Link from "next/link"; // Impor Link dari Next.js

export default async function BlogPage() {
  const posts = await getAllBlogPost();

  return (
    <section>
      <HeroSection />
      <div className="px-12">
        <h1 className="mt-14 text-5xl font-semibold">All Posts</h1>
        <hr className="my-8" />
        <div>
          {posts?.map((item) => {
            return (
              <div key={item.slug} className="mb-12 flex w-full flex-row">
                <div className="relative h-[350px] w-full">
                  <Image
                    src={item.thumbnailImage}
                    alt="Thumbnail Image"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="px-5">
                  <h4 className="text-2xl font-bold">
                    {item?.title as string}
                  </h4>
                  <div className="mt-7 flex w-fit flex-row items-center gap-2">
                    <div className="relative h-[53px] w-[53px] overflow-hidden rounded-full">
                      <Image
                        src={item.authorImage}
                        alt="Profile Picture"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base font-semibold">
                        {item?.author as string}
                      </span>
                      <div className="flex flex-row gap-[2px] text-sm font-normal">
                        <span>{item.date as string}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6">{item.description as string}</p>

                  {/* Menggunakan Link untuk navigasi */}
                  <Link href={`/blog/${item.slug}`}>
                    <button className="mt-5 w-52 rounded-lg bg-[#FF5959] py-2 text-sm font-bold text-white">
                      Read full article...
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </section>
  );
}
