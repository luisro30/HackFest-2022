import Hero from "@/components/Banner/HeroBanner";
import { Cards } from "@/components/Cards/Cards";
import { Menu } from "@/components/Menu/Menu";

function Home() {
  return (
    <div>
      <Hero />
      <main className="mx-auto max-w-screen-xl px-6 sm:px-8">
        <div className="mt-16 space-y-20">
          <Menu />
          <Cards />
        </div>
      </main>
    </div>
  );
}

export default Home;
