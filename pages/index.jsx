import { CardInfo } from "@/components/Banner/CardInfo";
import Hero from "@/components/Banner/HeroBanner";
import { Cards } from "@/components/Cards/Cards";
import { Header } from "@/components/Header/Header";
import Navbar from "../components/Header/Navbar"
import { ThemeProvider } from "@/context/ThemeContext";
import About from "@/components/About/About";

function Home() {
  return (
    <ThemeProvider>
      <Header />
      <Hero />

      <main className="mx-auto max-w-screen-xl px-6 sm:px-8">
        <div className="mt-16 space-y-20">
          <Cards />
          <About />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default Home;
