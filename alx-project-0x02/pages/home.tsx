import React from "react";
import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex flex-col items-center justify-center py-24 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Home Page</h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl">
          Welcome to the Home page of your Next.js project.
        </p>
      </main>
    </div>
  );
}
