"use client";
import HeroSection from "@/components/heroSection";
import { Post, searchPostByTitle } from "@/utils/get-contentful-data";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function Loading() {
  return <div>Loading...</div>;
}

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [results, setResults] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      if (query) {
        const posts = (await searchPostByTitle(query)) as unknown as Post[];
        setResults(posts || []);
      }
      setLoading(false);
    };

    fetchResults();
  }, [query]);

  return (
    <section className="min-h-screen">
      <HeroSection />
      <div className="px-4 md:px-12">
        <h1 className="mt-14 text-5xl font-semibold">Search Results</h1>
        <hr className="my-8" />
        {loading ? (
          <Loading />
        ) : results.length === 0 ? (
          <p>
            No results found for <strong>{query}</strong>
          </p>
        ) : (
          <ul>
            {results.map((item) => (
              <div
                key={item.fields.slug}
                className="flex flex-col items-center md:flex-row md:justify-between"
              >
                <div className="relative h-[250px] w-full md:h-[350px]">
                  <Image
                    src={`https:${item.fields.thumbnailImage?.fields.file.url || "/fallback-image.png"}`}
                    alt="Thumbnail Image"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="mt-5 w-full px-4 md:mt-0 md:w-3/4 md:px-5">
                  <h4 className="text-2xl font-bold">{item.fields.title}</h4>
                  <div className="mt-7 flex w-fit flex-row items-center gap-2">
                    <div className="relative h-[53px] w-[53px] overflow-hidden rounded-full">
                      <Image
                        src={`https:${item.fields.authorImage?.fields.file.url || "/fallback-avatar.png"}`}
                        alt="Profile Picture"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base font-semibold">
                        {item.fields.author || "Unknown Author"}
                      </span>
                      <div className="flex flex-row gap-[2px] text-sm font-normal">
                        <span>{item.fields.date || "Unknown Date"}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6">
                    {item.fields.description || "No description available."}
                  </p>
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

export default function SearchPage() {
  return (
    <Suspense fallback={<Loading />}>
      <SearchContent />
    </Suspense>
  );
}
