import Post from "@/components/posts/[id]";
import { Suspense } from "react";

const PostPage = async ({ params }: any) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Post slug={params.slug} />
    </Suspense>
  );
};

export default PostPage;
