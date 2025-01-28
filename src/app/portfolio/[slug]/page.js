import { getClient } from "@/lib/apolloClient";
import { gql } from "@apollo/client";
import Block, { PostBlocks } from "@/components/Block";

const query = gql`
  query {
    posts(first: 30, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        slug
      }
    }
  }
`;

const GetSinglePostWithBlocks = gql`
  query GetSinglePostWithBlocks($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      slug
      year
      ...PostBlocks
    }
  }
  ${PostBlocks}
`;

async function getPost(slug) {
  const { data } = await getClient().query({
    query: GetSinglePostWithBlocks,
    variables: { slug: slug },
  });
  //console.log('RESPONSE:', data)
  return data.post;
}

export async function generateStaticParams({ params }) {
  const { data } = await getClient().query({
    query: query,
    variables: { slug: params.slug },
  });
  //console.log("generateStaticParams", data);
  return data.posts.nodes.map((post) => ({
    slug: post.slug,
  }));
}

export const metadata = {
  title: "Samuli Susihukka – portfolio",
  description: "Olen kiinnostunut pienistä eleistä taiteessa.",
};

export default async function Post({ params }) {
  try {
    const { slug } = await params;
    const post = await getPost(slug);
    if (post) {
      return (
        <div className="grid px-4">
          <div className="col-span-4 md:col-span-6 md:col-start-3">
            <h1 className="text-base">{post.title}</h1>
          </div>
          {post.blocks.map((block, index) => (
            <Block block={block} key={index} />
          ))}
        </div>
      );
    } else {
      return <div>Post not found with the slug {params.slug}</div>;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }
}
