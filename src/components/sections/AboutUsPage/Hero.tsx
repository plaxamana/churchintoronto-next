import ParallaxBgImage from "@/components/common/ParallaxBgImage";

export default function AboutHero() {
  return (
    <ParallaxBgImage imgname="about-us.jpg" height="h-[60vh]">
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Us</h1>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#mission"
            className="bg-white text-slate-800 font-semibold px-5 py-2 rounded-md text-sm md:text-base hover:bg-gray-100 transition"
          >
            Our Mission
          </a>
          <a
            href="#beliefs"
            className="bg-white text-slate-800 font-semibold px-5 py-2 rounded-md text-sm md:text-base hover:bg-gray-100 transition"
          >
            What We Believe
          </a>
          <a
            href="#ministries"
            className="bg-white text-slate-800 font-semibold px-5 py-2 rounded-md text-sm md:text-base hover:bg-gray-100 transition"
          >
            Our Ministries
          </a>
          <a
            href="#team"
            className="bg-white text-slate-800 font-semibold px-5 py-2 rounded-md text-sm md:text-base hover:bg-gray-100 transition"
          >
            Our Team
          </a>
        </div>
      </div>
    </ParallaxBgImage>
  );
}
