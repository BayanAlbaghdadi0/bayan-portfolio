"use client";

// import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import {
  FaHome,
  FaInfo,
  FaProjectDiagram,
  FaStar,
  FaEnvelope,
} from "react-icons/fa";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
const navItems = [
  { name: "Home", link: "#home", icon: <FaHome /> },
  { name: "About", link: "#about", icon: <FaInfo /> },
  { name: "Projects", link: "#projects1", icon: <FaProjectDiagram /> },
  { name: "Testimonials", link: "#testimonials", icon: <FaStar /> },
  { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
];

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
