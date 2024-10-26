import { gql } from "@apollo/client";
import ParagraphBlock from "./types/coreParagraph";
import GalleryBlock from "./types/coreGallery";

export const PageBlocks = gql`
  fragment PageBlocks on Page {
    blocks {
      name
      ... on CoreParagraphBlock {
        originalContent
      }
    }
  }
`;

export const PostBlocks = gql`
  fragment PostBlocks on Post {
    blocks {
      name
      ... on CoreParagraphBlock {
        originalContent
      }
      ... on CoreGalleryBlock {
        innerBlocks {
          ... on CoreImageBlock {
            mediaItem {
              node {
                altText
                caption(format: RENDERED)
                sourceUrl
                sizes(size: FULLSCREEN)
                srcSet(size: FULLSCREEN)
                mediaDetails {
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default function Block({ block }) {
  const { originalContent, name, innerBlocks } = block;

  switch (name) {
    case "core/gallery":
      return <GalleryBlock innerBlocks={innerBlocks} />;
    case "core/paragraph":
      return <ParagraphBlock content={originalContent} />
    default:
      return null;
  }
}
