import Button from "@/src/components/Button";
import CircleScribble from "../public/circle-scribble.svg";
import IconVideoRecorder from "../public/icons/video-recorder.svg";
import GridBackground from "../public/grid-fade-background.svg";
import ContactForm from "@/src/components/ContactForm";
import CarouselImageSection from "@/src/components/CarouselImageSection";

function HeroSection() {
  return (
    <div className="flex flex-col items-center pt-[10vh] mb-20 overflow-x-hidden">
      <GridBackground className="absolute top-0 -z-20" />
      <h1 className="text-5xl sm:text-6xl text-center font-medium tracking-tighter leading-tight mb-4">
        Let&apos;s keep it{" "}
        <span className="relative">
          simple:{" "}
          <CircleScribble className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[110%]" />
        </span>
        you focus on your passion, we&apos;ll skyrocket your sales.
      </h1>
      <p className="text-xl font-light mb-8 text-gray-500 text-center">
        Your business deserves to be seen and heard; we&apos;re here to make
        sure it happens, stress-free.
      </p>

      <div className="flex items-center gap-4">
        <Button variant="outline" href="/strategy-call">
          <IconVideoRecorder className="w-6" /> Book a call
        </Button>
        <Button href="/strategy-call">Get in touch</Button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <CarouselImageSection />
      <ContactForm className="max-w-[500px] mx-auto pb-20" />
    </>
  );
}
