import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [posts, setPosts] = useState([
    { title: "Welcome!", content: "This is the home page." },
  ]);

  const handleAddPost = (data: { title: string; content: string }) => {
    setPosts((prev) => [...prev, data]);
  };

  return (
    <div className="p-6">
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg mb-4 hover:bg-blue-700"
      >
        Create New Post
      </button>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
}
