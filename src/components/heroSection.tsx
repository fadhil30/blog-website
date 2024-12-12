export default function HeroSection() {
  return (
    <section className="flex items-center bg-[url('/jdm.jpg')] bg-cover bg-center py-12 text-white">
      <div className="mt-12 flex w-full flex-col justify-start px-12">
        <h1 className="w-1/2 text-7xl font-bold text-white">
          Your Journey Your Car Your Way
        </h1>
        <p className="mt-5 w-1/2 text-lg font-medium">
          Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi elementum
          vel euismod aliquam. Amet ultrices neque augue consectetur purus
          phasellus. Ullamcorper lorem montes varius amet vestibulum tellus
          facilisis consequat pretium. Et faucibus laoreet molestie diam semper
          fames diam eget.
        </p>
        <button className="mt-5 w-44 rounded-lg bg-[#FF5959] py-2 text-xl font-bold">
          Subscribe
        </button>
      </div>
    </section>
  );
}
