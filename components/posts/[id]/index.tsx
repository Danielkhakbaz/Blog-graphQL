import Image from "next/image";
import { Link } from "next-view-transitions";
import { gql } from "graphql-request";
import { graphCMS } from "@/lib/services/graphql-client";
import { PostType } from "@/lib/types/post";

type PostProps = {
  slug: string;
};

const Post = async ({ slug }: PostProps) => {
  const QUERY = gql`
    query GetPost($slug: String!) {
      post(where: { slug: $slug }) {
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

  const { post } = await graphCMS.request<{ post: PostType }>(QUERY, { slug });

  console.log("POST", post);

  return (
    <>
      <button type="button" style={{ border: "2px solid black", padding: 4 }}>
        <Link href="/">Go Back</Link>
      </button>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.description.html }} />
      <h3>Author: {post.author.name}</h3>
      <Image src={post.author.avatar.url} alt="" width={100} height={100} />
    </>
  );
};

export default Post;
