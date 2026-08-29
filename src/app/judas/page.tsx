import { SectionPage } from "@/components/SectionPage";
import { Scene } from "@/components/three/Scene";

export default function Judas_Page() {
  return (
    <SectionPage title="Judas" kicker="Judas Experience">
      <Scene className="h-[320px] w-full max-w-3xl" />
    </SectionPage>
  );
}
