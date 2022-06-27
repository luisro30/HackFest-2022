import { CardInfo } from "@/components/Banner/CardInfo";
import Hero from "@/components/Banner/HeroBanner";
import { Cards } from "@/components/Cards/Cards";
import { Menu } from "@/components/Menu/Menu";
import { Header } from "@/components/Header/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import { Footer } from "@/components/footer/Footer";
import Ready from "@/components/Ready";

function Home() {
  return (
    <div>
      <Hero />
      <main className="mx-auto max-w-screen-xl px-6 sm:px-8">
        <div className="mt-16 space-y-20">
          <Cards />
          <Menu />
        </div>
      </main>
      <Ready />
  
    </div>
  );
}

export default Home;
