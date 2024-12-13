import Image from "next/image";

export default function AllCategorySection() {
  return (
    <section className="mt-14 px-12">
      <div className="flex w-full flex-row justify-between">
        <h3 className="text-2xl font-bold">All Category</h3>
        <span className="text-base font-medium">See all</span>
      </div>
      <div className="mt-4 flex h-auto w-72 flex-col items-center justify-center rounded-xl bg-[#F4F0F8] p-4 text-center">
        <div className="relative flex h-[90px] w-[90px] items-center justify-center overflow-hidden rounded-full">
          <Image src="/car5.webp" alt="" fill className="object-cover" />
        </div>
        <h4 className="mt-7">Car Reviews</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egeendrerit
          in.
        </p>
      </div>
    </section>
  );
}
