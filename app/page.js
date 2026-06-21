import Hero from "@/components/sections/Hero";
import HomeAbout from "@/components/sections/HomeAbout";
import HomeMenu from "@/components/sections/HomeMenu";
import HomePromo from "@/components/sections/HomePromo";
import HomeAchievements from "@/components/sections/HomeAchievements";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[linear-gradient(to_bottom,#F3E9DC,#EBC5DA,#FFEBF7,#F3E9DC,#EBC5DA,#FFEBF7,#F3E9DC,#EBC5DA,#FFEBF7,#FFEBF7)] ">
      <Hero />
      <HomeAbout />
      <HomeMenu />
      <HomeAchievements />
      <HomePromo />
    </div>
  );
}
