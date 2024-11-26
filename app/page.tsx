import Image from "next/image";
import { Link } from "next-view-transitions";
import { gql } from "graphql-request";
import { graphCMS } from "@/lib/services/graphql-client";
import { PostType } from "@/lib/types/post";

const HomePage = async () => {
  const QUERY = gql`
    {
      posts {
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

  const { posts } = await graphCMS.request<{ posts: PostType[] }>(QUERY);

  return (
    <>
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/posts/${post.slug}`}
          className="flex flex-col gap-8 border-2 bg-blue-400 p-4 shadow-xl"
        >
          <h3>Title: {post.title}</h3>
          <h3>Published At: {post.published_at}</h3>
          <h3>Slug: {post.slug}</h3>
          <Image src={post.coverImage.url} alt="" width={100} height={100} />
        </Link>
      ))}
    </>
  );
};

export default HomePage;
