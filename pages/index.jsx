import { CardInfo } from "@/components/Banner/CardInfo";
import Hero from "@/components/Banner/HeroBanner";
import { Cards } from "@/components/Cards/Cards";
import { Menu } from "@/components/Menu/Menu";
import { Header } from "@/components/Header/Header";
import Navbar from "../components/Header/Navbar"
import { ThemeProvider } from "@/context/ThemeContext";
import Ready from "@/components/Ready";


function Home() {
  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <main className="mx-auto max-w-screen-xl px-6 sm:px-8">
        <div className="mt-16 space-y-20">
          
          <Cards />
          <Menu/>
          <About />
        </div>
      </main>
      <Ready />
    </ThemeProvider>
  );
}

export default Home;
