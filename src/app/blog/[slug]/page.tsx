import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getSingleBlogPost } from "@/utils/get-contentful-data";
import { BLOCKS } from "@contentful/rich-text-types";
import AllCategorySection from "@/components/all-category";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await getSingleBlogPost(slug);

  return (
    <section>
      <div className="pt-20">
        <div className="relative h-[586px] w-full">
          <Image
            src={post?.featuredImage as string}
            alt="Thumbnail Image"
            fill
            className="object-cover"
          />
        </div>
        <div className="mt-5 px-12">
          <h4 className="text-5xl font-bold">{post?.title as string}</h4>
          <div className="mt-7 flex w-fit flex-row items-center gap-2">
            <div className="relative h-[53px] w-[53px] overflow-hidden rounded-full">
              <Image
                src={post?.authorImage as string}
                alt="Profile Picture"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-row items-center gap-6">
              <span className="ml-5 text-base font-semibold">
                {post?.author as string}
              </span>
              <span>|</span>
              <span className="text-sm font-normal">
                {post?.date as string}
              </span>
            </div>
          </div>
          <div className="px-36">
            {documentToReactComponents(post?.content, {
              renderNode: {
                [BLOCKS.HEADING_2]: (node, children) => {
                  return (
                    <h2 className="font-semi-bold mt-9 text-4xl">{children}</h2>
                  );
                },
                [BLOCKS.PARAGRAPH]: (node, children) => {
                  return (
                    <p className="mt-4 text-base font-normal">{children}</p>
                  );
                },
                [BLOCKS.UL_LIST]: (node, children) => {
                  return (
                    <ul className="list-disc pl-7 text-2xl font-bold text-[#494A53]">
                      {children}
                    </ul>
                  );
                },
              },
            })}
          </div>
        </div>
      </div>
      <AllCategorySection />
    </section>
  );
}
