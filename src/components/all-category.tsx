import { getCategories } from "@/utils/get-contentful-data";
import Image from "next/image";
import Link from "next/link";

export default async function AllCategorySection() {
  const posts = await getCategories();

  return (
    <section className="mt-14 px-12">
      <div className="flex w-full flex-row justify-between">
        <h3 className="text-2xl font-bold">All Category</h3>
        <span className="text-base font-medium">See all</span>
      </div>
      <div className="flex flex-row gap-12 space-x-5 overflow-x-auto scroll-smooth">
        {posts?.map((item) => {
          return (
            <Link key={item.slug} href={``}>
              <div className="mt-4 flex h-auto w-72 flex-col items-center justify-center rounded-xl bg-[#F4F0F8] p-4 text-center">
                <div className="relative flex h-[90px] w-[90px] items-center justify-center overflow-hidden rounded-full">
                  <Image
                    src="/car1.webp"
                    alt="Category Image"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="mt-7 text-xl font-bold">
                  {item.title as string}
                </h4>
                <p className="mt-4 text-sm font-normal">
                  {item.description as string}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
