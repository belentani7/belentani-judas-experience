import { SectionPage } from "@/components/SectionPage";
import { Scene } from "@/components/three/Scene";

export default function Gallery_Page() {
  return (
    <SectionPage title="Galería" kicker="Judas Experience">
      <Scene className="h-[320px] w-full max-w-3xl" />
    </SectionPage>
  );
}
