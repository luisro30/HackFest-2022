import About from "@/components/About/About";
import Testimonials from "@/components/About/Testimonials";

function AboutPage() {
  return (
    <div>
      <main className="mx-auto max-w-screen-xl px-6 sm:px-8">
        <div className="mt-16 space-y-20">
          <About />
        </div>
      </main>
      <Testimonials />
    </div>
  );
}

export default AboutPage;
