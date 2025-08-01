"use client";
export default function Blog() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-gray-300 flex flex-col items-center justify-start py-30">
      <div className="w-full max-w-4xl  text-start mb-20">
        <h1 className="text-5xl font-bold text-white mb-4">Testimonials</h1>
        <p className="text-lg text-gray-400">What clients and colleagues say about working with me...</p>
      </div>

      <div className="flex flex-col items-center justify-center mt-10">
        <span className="text-6xl">🚧</span>
        <h2 className="text-2xl font-bold text-white mt-4">Coming Soon</h2>
        <p className="text-gray-400 mt-2">This page is under construction. Check back soon!</p>
      </div>
    </div>
  );
}
