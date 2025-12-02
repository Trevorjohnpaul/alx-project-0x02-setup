// pages/posts.tsx
import React from "react";
import Header from "@/components/layout/Header";

const PostsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold">Posts Page</h1>
        <p>Here you can see all posts.</p>
      </main>
    </div>
  );
};

export default PostsPage;
