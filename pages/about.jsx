
import Hero from "@/components/Banner/HeroBanner";
import { Header } from "@/components/Header/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import About from "@/components/About/About";

function AboutPage() {
  return (
    <ThemeProvider>
      <Header />
      <Hero />

      <main className="mx-auto max-w-screen-xl px-6 sm:px-8">
        <div className="mt-16 space-y-20">

          <About />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default AboutPage;
