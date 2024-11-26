import { Link } from "next-view-transitions";
import { gql } from "graphql-request";
import { graphCMS } from "@/lib/services/graphql-client";
import { PostType } from "@/lib/types/post";

const PostPage = async ({ params }: any) => {
  const QUERY = gql`
    {
      post(where: { slug: "${params.slug}" }) {
        id
        title
        published_at
        slug
        description {
          html
        }
        coverImage {
          url
        }
        author {
          name
          avatar {
            url
          }
        }
      }
    }
  `;

  console.log(params);

//   const { posts } = await graphCMS.request<{ posts: PostType[] }>(QUERY);

//   console.log(posts);

  return (
    <>
      <button>
        <Link href="/">Go Back</Link>
      </button>
    </>
  );
};

export default PostPage;
