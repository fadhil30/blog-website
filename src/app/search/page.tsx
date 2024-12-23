"use client";
import HeroSection from "@/components/heroSection";
import { searchPostByTitle } from "@/utils/get-contentful-data";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation"; // Menggunakan useSearchParams
import { useEffect, useState } from "react";

export default function SearchPage() {
  const searchParams = useSearchParams(); // Dapatkan search params
  const query = searchParams.get("q"); // Ambil nilai dari parameter q
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      if (query) {
        const posts = await searchPostByTitle(query); // Panggil fungsi pencarian
        setResults(posts);
      }
      setLoading(false);
    };

    fetchResults();
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <HeroSection />
      <div className="px-12">
        <h1 className="mt-14 text-5xl font-semibold">Search Results</h1>
        <hr className="my-8" />
        {results.length === 0 ? (
          <p>
            No results found for <strong>{query}</strong>
          </p>
        ) : (
          <ul>
            {results.map((item) => (
              <div
                key={item.fields.slug}
                className="mb-12 flex w-full flex-row"
              >
                <div className="relative h-[350px] w-full">
                  <Image
                    src={`https:${item.fields.thumbnailImage.fields.file.url}`}
                    alt="Thumbnail Image"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="px-5">
                  <h4 className="text-2xl font-bold">{item.fields.title}</h4>
                  <div className="mt-7 flex w-fit flex-row items-center gap-2">
                    <div className="relative h-[53px] w-[53px] overflow-hidden rounded-full">
                      <Image
                        src={`https:${item.fields.authorImage.fields.file.url}`}
                        alt="Profile Picture"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base font-semibold">
                        {item?.fields.author as string}
                      </span>
                      <div className="flex flex-row gap-[2px] text-sm font-normal">
                        <span>{item.fields.date as string}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6">{item.fields.description}</p>
                  <Link href={`/blog/${item.fields.slug}`}>
                    <button className="mt-5 w-52 rounded-lg bg-[#FF5959] py-2 text-sm font-bold text-white">
                      Read full article...
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
