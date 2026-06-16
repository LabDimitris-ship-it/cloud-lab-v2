
export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl text-blue-600">
          CLOUD LAB
        </h1>

        <div className="flex gap-6">
          <a href="/">Αρχική</a>
          <a href="/robotics">Ρομποτική</a>
          <a href="/activities">Δραστηριότητες</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Επικοινωνία</a>
        </div>
      </div>
    </nav>
  );
}
