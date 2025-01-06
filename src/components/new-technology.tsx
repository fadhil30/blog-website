import { getNewTechnologyPost } from "@/utils/get-contentful-data";
import Image from "next/image";
import Link from "next/link";

export default async function NewTechnologySection() {
  const posts = await getNewTechnologyPost();

  return (
    <section className="mt-14 px-4 md:px-12">
      <div className="mb-4 flex flex-col items-center justify-between md:flex-row">
        <h3 className="text-2xl font-bold">New Technology</h3>
        <Link
          href={"/blog"}
          className="cursor-pointer text-base font-medium hover:underline"
        >
          <span className="cursor-pointer text-base font-medium hover:underline">
            See all
          </span>
        </Link>
      </div>
      <div className="scrollbar-hide mt-4 flex flex-row gap-5 overflow-x-auto">
        {posts?.slice(0, 4)?.map((item) => (
          <Link key={item.slug as string} href={`/blog/${item.slug}`}>
            <div className="flex h-[350px] w-[380px] flex-col rounded-xl bg-[#F4F0F8] p-4 transition-transform duration-200 hover:scale-105">
              <div className="relative mb-4 h-[150px] w-full">
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
              <div className="mt-4 flex items-center gap-4">
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
                    {item.author as string}
                  </span>
                  <span className="text-sm font-normal">
                    {item.date as string}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
