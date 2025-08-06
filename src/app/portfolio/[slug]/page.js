import { projectsData } from "@/components/projects";
import Image from "next/image";

export const metadata = {
  title: "Samuli Susihukka – portfolio",
  description: "Olen kiinnostunut pienistä eleistä taiteessa.",
};


export default async function Post({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  return (
    <div className="grid px-4 pb-4 pt-12">
      <div className="col-span-4 md:col-span-6 md:col-start-3">
        <h1 className="text-base">{project.title} <time>({project.year})</time></h1>
      </div>
      <div className="col-span-4 md:col-span-5 md:col-start-3 md:row-start-2 py-8 text-base leading-snug">
        <p>{project.description}</p>
      </div>
      <div className="col-span-4 md:col-start-3 md:col-end-10 md:row-start-3 flex flex-col gap-y-8">
        {project.images.map((image) => (
          <figure key={image.id}>
            <Image
              height={image.height}
              width={image.width}
              alt={`Samuli Susihukan teos ${image.altText}, valokuva`}
              src={`/portfolio/${image.sourceUrl}`}
            />
            <figcaption className="text-right text-base">{ image.altText }</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
