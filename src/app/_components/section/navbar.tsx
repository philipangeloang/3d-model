export default function Navbar() {
  return (
    <section className="w-full">
      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between gap-5 p-4 py-10">
        <div className="font-inter text-5xl font-black text-gray-600">LOGO</div>
        <div className="flex flex-col gap-2">
          <div className="h-1 w-12 bg-black"></div>
          <div className="h-1 w-12 bg-black"></div>
        </div>
      </nav>
    </section>
  );
}
