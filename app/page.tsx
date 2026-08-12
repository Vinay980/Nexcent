import Header from "@/components/layout/Header";
import Achievements from "@/components/sections/Achievements";
import Calendar from "@/components/sections/Calendar";
import Clients from "@/components/sections/Clients";
import Community from "@/components/sections/Community";
import CommunityCards from "@/components/sections/CommunityCards";
import CommunityUpdates from "@/components/sections/CommunityUpdates";
import CTA from "@/components/sections/CTA";
import Customers from "@/components/sections/Customers";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Unlock from "@/components/sections/Unlock";

export default function Home() {
  return (
    <main>
      <Header />

      {/* Home */}
      <div className="flex flex-col gap-[40px]">
        <Hero />
        <Clients />
        <Community />
        <CommunityCards />
      </div>

      {/* Body */}

      <Unlock />
      <Achievements />
      <Calendar />
      <Customers />
      <CommunityUpdates />
      <div className="flex flex-col mt-[48px]">
      <CTA />
        <Footer />
      </div>
    </main>
  );
}
