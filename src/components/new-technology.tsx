import { getNewTechnologyPost } from "@/utils/get-contentful-data";
import Image from "next/image";
import Link from "next/link";

export default async function NewTechnologySection() {
  const posts = await getNewTechnologyPost();

  return (
    <section className="mt-14 px-12">
      <div className="flex w-full flex-row justify-between">
        <h3 className="text-2xl font-bold">New Technology</h3>
        <span className="text-base font-medium">See all</span>
      </div>
      <div className="flex h-[400px] flex-row gap-5 space-x-5 overflow-x-auto scroll-smooth">
        {posts?.map((item) => {
          return (
            <Link key={item.slug} href={`/blog/${item.slug}`}>
              <div className="mt-4 h-auto w-72 rounded-xl bg-[#F4F0F8] p-4">
                <div className="relative mb-4 h-[150px] w-[250px]">
                  <Image
                    src={item.thumbnailImage}
                    alt="Thumbnail Image"
                    fill
                    className="overflow-hidden rounded-lg object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-[#2B2C34]">
                  {item.title as string}
                </h4>
                <div className="mt-8 flex w-fit flex-row gap-4">
                  <div className="relative h-[53px] w-[53px] overflow-hidden rounded-full">
                    <Image
                      src={item.authorImage}
                      alt="Profile Picture"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-1 flex flex-col">
                    <span className="text-base font-semibold">
                      {item.author as string}
                    </span>
                    <span className="text-sm font-normal">
                      {item.date as string}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
