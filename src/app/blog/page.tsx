import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import { getAllPost } from "@/utils/get-contentful-data";

import Image from "next/image";

export default async function BlogPage() {
  const allPost = await getAllPost();

  return (
    <section>
      <HeroSection />
      <div className="px-12">
        <h1 className="mt-14 text-5xl font-semibold">All Posts</h1>
        <hr className="my-8" />
        {allPost?.items?.map((post) => (
          <div key={post.sys.id} className="mb-12 flex w-full flex-row">
            <div className="relative w-full">
              <Image
                src={post.featuredImage?.fields.file.url}
                alt={post.fields.title}
                width={480}
                height={350}
              />
            </div>
            <div className="px-5">
              <h4 className="text-2xl font-bold">
                A Review of Cars with Advanced Infotainment Systems
              </h4>
              <div className="mt-7 flex w-fit flex-row items-center gap-2">
                <div className="relative h-[53px] w-[53px] overflow-hidden rounded-full">
                  <Image
                    src="/user1.webp"
                    alt="Profile Pictue"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-semibold">Dasteen</span>
                  <div className="flex flex-row gap-[2px] text-sm font-normal">
                    <span>Jan 10, 2024</span>
                    <span>•</span>
                    <span>3 Min Read</span>
                  </div>
                </div>
              </div>
              <p className="mt-7">
                Lorem ipsum dolor sit amet consectetur. Consectetur risus quis
                diam hendrerit. Interdum mattis in sed diam egestas metus at
                duis commodo. Cursus quis cursus dignissim egestas sollicitudin
                tristique quis. Orci neque quis porttitor eu amet. ommodo.
                Cursus quis cursus dignissim egestas sollicitudin tristique
                quis. Orci neque quis porttitor eu amet.
              </p>
              <button className="mt-5 w-52 rounded-lg bg-[#FF5959] py-2 text-sm font-bold text-white">
                Read full article...
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
}
