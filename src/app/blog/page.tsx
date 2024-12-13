import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import Image from "next/image";

export default function BlogPage() {
  return (
    <section>
      <HeroSection />
      <div className="px-12">
        <h1 className="mt-14 text-5xl font-semibold">All Posts</h1>
        <hr className="my-8" />
        <div className="mb-12 flex w-full flex-row">
          <div className="w-full">
            <Image
              src="/car1.webp"
              alt=""
              width={480}
              height={350}
              className="relative"
            />
          </div>
          <div className="">
            <h2>A Review of Cars with Advanced Infotainment Systems</h2>
            <div className="mt-7 flex flex-row items-start justify-start">
              <div className="w-full">
                <Image
                  src="/user1.webp"
                  alt="Profile Pictue"
                  width={53}
                  height={53}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex w-full flex-col">
                <span>Dasteen</span>
                <span>Jan 10, 2024</span>
                <span>3 Min Read</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Consectetur risus quis
              diam hendrerit. Interdum mattis in sed diam egestas metus at duis
              commodo. Cursus quis cursus dignissim egestas sollicitudin
              tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus
              quis cursus dignissim egestas sollicitudin tristique quis. Orci
              neque quis porttitor eu amet.
            </p>
            <button className="mt-5 w-52 rounded-lg bg-[#FF5959] py-2 text-sm font-bold text-white">
              Read full article...
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
