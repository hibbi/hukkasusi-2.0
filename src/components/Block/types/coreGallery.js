import Image from "next/image";
import parseHtml from "@/components/parser";

export default function GalleryBlock({ innerBlocks }) {
  return (
    <div className="md:col-start-3 md:col-end-10 md:row-start-3 flex flex-col gap-y-8">
      {innerBlocks.map((img) => {
        return (
          <figure key={img.mediaItem.node.id} className="">
            <picture>
              <Image
                alt={img.mediaItem.node.altText}
                width={img.mediaItem.node.mediaDetails.width}
                height={img.mediaItem.node.mediaDetails.height}
                sizes={img.mediaItem.node.sizes}
                src={img.mediaItem.node.sourceUrl}
                srcSet={img.mediaItem.node.srcSet}
              />
            </picture>
            <figcaption className="text-right">
              {parseHtml(img.mediaItem.node.caption)}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
};