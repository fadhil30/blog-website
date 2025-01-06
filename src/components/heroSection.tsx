export default function HeroSection() {
  return (
    <section className="flex items-center bg-[url('/bg911.webp')] bg-cover bg-center py-12 text-white">
      <div className="mt-12 flex w-full flex-col justify-center px-6 md:px-12 lg:px-24">
        <h1 className="text-xl font-bold text-white md:text-6xl lg:text-7xl">
          Your Journey
        </h1>
        <h1 className="text-xl font-bold text-white md:text-6xl lg:text-7xl">
          Your Car
        </h1>
        <h1 className="text-xl font-bold text-white md:text-6xl lg:text-7xl">
          Your Way
        </h1>
        <p className="mt-5 w-full text-sm font-medium md:w-3/4 md:text-lg lg:w-1/2 lg:text-xl">
          Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi elementum
          vel euismod aliquam. Amet ultrices neque augue consectetur purus
          phasellus. Ullamcorper lorem montes varius amet vestibulum tellus
          facilisis consequat pretium. Et faucibus laoreet molestie diam semper
          fames diam eget.
        </p>
        <button className="mt-5 w-44 rounded-lg bg-[#FF5959] py-2 text-base font-bold hover:scale-105 md:text-lg lg:text-xl">
          Subscribe
        </button>
      </div>
    </section>
  );
}
