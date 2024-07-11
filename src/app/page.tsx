import BounceAnimation from "@/components/bounce";
import GsapHook from "@/components/gsapHook";
import ToggleAnimation from "@/components/toggle";

export default function Home() {
  return (
    <main>
      <GsapHook />
      <ToggleAnimation />
      <BounceAnimation />
    </main>
  );
}
