import { getNewTechnologyPost } from "@/utils/get-contentful-data";
import Image from "next/image";
import Link from "next/link";

export default async function NewTechnologySection() {
  const posts = await getNewTechnologyPost();

  const itemSize = "h-[350px] w-[330px]";

  return (
    <section className="mt-14 px-4 md:px-12">
      <div className="mb-4 flex flex-col items-center justify-between md:flex-row">
        <h3 className="text-2xl font-bold">New Technology</h3>
        <Link
          href={"/blog"}
          className="cursor-pointer text-base font-medium hover:underline"
        >
          See all
        </Link>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts?.slice(0, 4)?.map((item) => (
          <Link key={item.slug} href={`/blog/${item.slug}`}>
            <div
              className={`flex flex-col rounded-xl bg-[#F4F0F8] p-4 transition-transform duration-200 hover:scale-105 ${itemSize}`}
            >
              <div className="relative mb-4 h-[150px] w-full">
                <Image
                  src={item.thumbnailImage}
                  alt="Thumbnail Image"
                  fill
                  className="overflow-hidden rounded-lg object-cover"
                />
              </div>
              <h4 className="text-lg font-bold text-[#2B2C34]">{item.title}</h4>
              <div className="mt-auto flex items-center gap-4">
                <div className="relative h-[53px] w-[53px] overflow-hidden rounded-full">
                  <Image
                    src={item.authorImage}
                    alt="Profile Picture"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-semibold">{item.author}</span>
                  <span className="text-sm font-normal">{item.date}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
