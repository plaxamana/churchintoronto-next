import Hero from "@/components/sections/AboutUsPage/Hero";
import Mission from "@/components/sections/AboutUsPage/Mission";
import Pillars from "@/components/sections/AboutUsPage/Pillars";
import Beliefs from "@/components/sections/AboutUsPage/Beliefs";
import Ministries from "@/components/sections/AboutUsPage/Ministries";
import ParallaxBgImage from "@/components/common/ParallaxBgImage";
import Team from "@/components/sections/AboutUsPage/Team";
import { getTeam } from "@/sanity/lib/getTeam";

export default async function AboutUsPage() {
  const team = await getTeam();

  return (
    <>
      <Hero />
      <Mission />
      <Pillars />
      <ParallaxBgImage imgname="about-us-2.jpg" />
      <Beliefs />
      <ParallaxBgImage imgname="about-us-3.jpg" />
      <Ministries />
      <ParallaxBgImage imgname="about-us-4.jpg" />
      <Team team={team} />
    </>
  );
}
