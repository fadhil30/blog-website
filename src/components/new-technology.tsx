import Image from "next/image";

export default function NewTechnologySection() {
  return (
    <section className="mt-14 px-12">
      <div className="flex w-full flex-row justify-between">
        <h3 className="text-2xl font-bold">New Technology</h3>
        <span className="text-base font-medium">See all</span>
      </div>
      <div className="mt-4 h-auto w-72 rounded-xl bg-[#F4F0F8] p-4">
        <div className="w-full">
          <Image
            src="/car1.webp"
            alt=""
            width={626}
            height={369}
            layout="responsive"
            className="rounded-lg object-cover"
          />
        </div>
        <h4 className="mt-7">
          A Review of Cars with Advanced Infotainment Systems
        </h4>
        <div>
          <Image src="" alt="Profile Pictue" width={53} height={53} />
        </div>
      </div>
    </section>
  );
}
