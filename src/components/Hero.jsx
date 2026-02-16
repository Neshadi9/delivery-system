export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="text-5xl font-bold md:text-6xl text-slate-900 tracking-tight mb-6">
        Dersual <span> - </span>It has arrived.
      </h1>
      <p className="max-w-2xl text-lg md:text-xl text-slate-900 leading-relaxed mb-10">
        Transparent delivery management for businesses. Create orders, track
        drivers, and get proof of delivery — all in one place.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-[#F99D1C] hover:bg-[#e88d00] text-white font-bold py-4 px-8 rounded-lg shadow-md transition-all active:scale-95">
          For Enterprises
        </button>

        <button className="bg-[#0C2340] hover:bg-[#1a2e4d] text-white font-bold py-4 px-8 rounded-lg shadow-md transition-all active:scale-95">
          Log in
        </button>
      </div>
    </div>
  );
}
