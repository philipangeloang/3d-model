import HamburgerMenu from "../block/hamburger-menu";
export default function Navbar() {
  return (
    <section className="w-full">
      <nav className="relative mx-auto flex max-w-screen-2xl items-center justify-between gap-5 p-10">
        <div className="font-inter text-5xl font-black text-gray-600">LOGO</div>
        <HamburgerMenu />
      </nav>
    </section>
  );
}
