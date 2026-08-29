import { SectionPage } from "@/components/SectionPage";
import { Scene } from "@/components/three/Scene";

export default function Studio_Page() {
  return (
    <SectionPage title="Estudio" kicker="Judas Experience">
      <Scene className="h-[320px] w-full max-w-3xl" />
    </SectionPage>
  );
}
