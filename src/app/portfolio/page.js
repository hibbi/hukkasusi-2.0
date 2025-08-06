import Projects from "@/components/projects";

export const metadata = {
  title: "Samuli Susihukka – portfolio",
  description: "Olen kiinnostunut pienistä eleistä valokuvataiteessa.",
};

export default async function Portfolio() {
  return (
    <div className="grid px-4 pb-4 pt-12">
        <Projects />
    </div>
  );
}