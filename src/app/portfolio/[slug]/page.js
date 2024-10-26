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
  console.log("post!");
  try {
    const { slug } = await params;
    const post = await getPost(slug);

    console.log(post);
    if (post) {
      return (
        <div className="flex flex-col md:grid md:grid-cols-12 gap-x-[1.5vw] mx-8 py-12">
          <div className="md:col-span-6 md:col-start-3">
            <h1 className="text-xl md:text-2xl">{post.title}</h1>
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
