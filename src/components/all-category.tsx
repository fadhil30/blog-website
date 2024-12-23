import { getCategories } from "@/utils/get-contentful-data";
import Image from "next/image";
import Link from "next/link";

export default async function AllCategorySection() {
  const posts = await getCategories();

  return (
    <section className="mt-14 px-4 md:px-12">
      <div className="mb-4 flex flex-col items-center justify-between md:flex-row">
        <h3 className="text-2xl font-bold">All Category</h3>
        <Link href="/categories" className="text-base font-medium">
          See all
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 scroll-smooth sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts?.map((item) => {
          return (
            <Link key={item.slug} href={``}>
              <div className="flex flex-col items-center justify-center rounded-xl bg-[#F4F0F8] p-4 text-center transition-transform hover:scale-105">
                <div className="relative mb-4 flex h-[90px] w-[90px] items-center justify-center overflow-hidden rounded-full">
                  <Image
                    src={posts.categoryImage}
                    alt="Category Image"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="mt-7 text-lg font-bold">
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
