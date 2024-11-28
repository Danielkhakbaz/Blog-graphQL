import { Suspense } from "react";
import Posts from "@/components/posts";

const HomePage = async () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Posts />
    </Suspense>
  );
};

export default HomePage;
