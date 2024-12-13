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
            width={248}
            height={189}
            layout="responsive"
            className="rounded-lg object-cover"
          />
        </div>
        <h4 className="mt-7">
          A Review of Cars with Advanced Infotainment Systems
        </h4>
        <div className="mt-7 flex w-fit flex-row items-center gap-2">
          <div className="relative h-[53px] w-[53px] overflow-hidden rounded-full">
            <Image
              src="/user1.webp"
              alt="Profile Pictue"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span>Dasteen</span>
            <div className="flex flex-row gap-[2px]">
              <span>Jan 10, 2024</span>
              <span>•</span>
              <span>3 Min Read</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
