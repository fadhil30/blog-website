import Image from "next/image";

export default function LatestSection() {
  return (
    <section className="mt-24 px-12">
      <div className="flex flex-row">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold">Latest</h2>
          <div className="mt-14 px-10">
            <div className="w-full">
              <Image
                src="/car1.webp"
                alt=""
                width={626}
                height={369}
                layout="responsive"
                className="object-cover"
              />
            </div>
            <div className="mt-5 flex w-64 justify-between text-sm font-medium">
              <span>By</span>
              <span className="text-[#FF6666]">Alex Ferguson</span>
              <span>|</span>
              <span>March 12, 2024</span>
            </div>
            <h3 className="mt-2 text-2xl font-bold">
              Lorem ipsum dolor sit amet, consectetur aiscing elit, sed do
              eiusmod tempor.
            </h3>
            <p className="mt-1">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident. Duis aute irure dolor in reprehenderit in
              voluptate v Duis aute irure dolor in reprehenderit in volusse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <button className="mt-5 w-52 rounded-lg bg-[#FF5959] py-2 text-lg font-bold text-white">
              Read more
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <div className="m-auto flex flex-row justify-between">
            <h2 className="text-3xl font-bold">Trending Now</h2>
            <span className="text-base font-medium">see all</span>
          </div>
          <div className="mt-5 flex w-64 justify-between text-sm font-medium">
            <span>By</span>
            <span className="text-[#FF6666]">Alex Ferguson</span>
            <span>|</span>
            <span>March 12, 2024</span>
          </div>
          <h3 className="mt-2 text-2xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </h3>
        </div>
      </div>
    </section>
  );
}
