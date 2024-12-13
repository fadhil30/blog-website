export default function Footer() {
  return (
    <footer className="mt-32 bg-[#232536] py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-center justify-between gap-2 bg-[#2A2B39] p-6">
          <h1 className="text-4xl font-bold text-white">
            Subscribe to our news letter to get latest updates and news
          </h1>
          <div className="flex items-center gap-6">
            <input
              type="email"
              placeholder="example@email.com"
              className="h-10 w-96 rounded-lg px-5"
            />
            <button className="w-44 rounded-lg bg-[#FF5959] py-2 text-xl font-bold text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
