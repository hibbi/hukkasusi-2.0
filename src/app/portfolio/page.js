import { getClient } from "@/lib/apolloClient";
import { gql } from "@apollo/client";
import Link from "next/link";

const query = gql`
  query {
    posts(
      first: 20
      where: {
        categoryName: "art"
        orderby: { field: DATE, order: DESC }
      }
    ) {
      edges {
        cursor
        node {
          id
          postId
          title
          slug
          year
        }
      }
    }
  }
`;

async function getPosts() {
  try {
    const { data } = await getClient().query({
      query: query,
    });
    return data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
}

export const metadata = {
  title: "Samuli Susihukka – portfolio",
  description: "Olen kiinnostunut pienistä eleistä valokuvataiteessa.",
};

export default async function Portfolio() {
      const data = await getPosts();
  return (
    <div className="grid px-4 pt-12">
      <div className="flex flex-col col-span-4 md:col-start-3 md:col-end-9">
        {data.edges.map((post) => (
          <Link key={post.node.postId} href={`/portfolio/${post.node.slug}`}>
            <span className="text-base">
              {post.node.year} {post.node.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}