import HeroSection from "@/components/heroSection";
import { getCategories } from "@/utils/get-contentful-data";
import Image from "next/image";
import Link from "next/link";

export default async function CategoryBlog() {
  const categories = await getCategories();

  return (
    <section className="min-h-screen pt-12">
      <HeroSection />
      <div className="px-4 md:px-12">
        <h1 className="mt-14 text-3xl font-semibold md:text-5xl">
          All Categories
        </h1>
        <hr className="mt-8" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories?.map((category) => {
            return (
              <div key={category.slug as string} className="flex flex-col">
                <div className="relative h-56 w-full md:h-72 lg:h-80">
                  <Image
                    src={category.categoryImage}
                    alt="Category Image"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex flex-col p-5">
                  <h4 className="text-xl font-bold">
                    {category.title as string}
                  </h4>
                  <p className="mt-2 flex-grow text-sm">
                    {category.description as string}
                  </p>
                  <Link
                    key={category.slug as string}
                    href={`/category/${category.slug}`}
                  >
                    <button className="mt-4 w-full rounded-lg bg-[#FF5959] py-2 text-sm font-bold text-white transition hover:scale-105">
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
