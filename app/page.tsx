import Encryption from "@/components/main/Encryption";
import Hero from "../components/main/Hero"
import Skill from "@/components/main/Skill";
import Projects from "@/components/main/Projects";

export default function Home() {
  return (
    <main className="h-full w-full ">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skill />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
