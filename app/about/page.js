import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutTeam from "@/components/about/AboutTeam";
import AboutGallery from "@/components/about/AboutGallery";

export const metadata = {
  title: "About Us | Sistech Cafe",
  description: "Learn more about our story, core values, and the team behind Sistech Cafe.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[linear-gradient(to_bottom,#F3E9DC,#EBC5DA,#FFEBF7,#F3E9DC,#EBC5DA,#FFEBF7,#F3E9DC,#EBC5DA,#FFEBF7,#FFEBF7)] ">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <AboutGallery />
    </div>
  );
}
