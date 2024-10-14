import { AlQuranFilters, AlQuranTable } from "@/components/fragments/al-quran";
import { MainLayout } from "@/components/layouts";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import GridPattern from "@/components/ui/grid-pattern";

export default function HomePage() {
  return (
    <MainLayout>
      <header className="flex justify-center items-center py-4">
        <AnimatedShinyText className="text-5xl font-semibold">
          Ayahs Al - Quran
        </AnimatedShinyText>
      </header>
      <nav className="flex justify-end items-center py-4">
        <AlQuranFilters />
      </nav>
      <main>
        <AlQuranTable />
      </main>
      <GridPattern className="absolute inset-0 -z-10" />
    </MainLayout>
  )
}
