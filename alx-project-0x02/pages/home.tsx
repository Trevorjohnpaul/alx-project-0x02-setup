import React from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-5xl mx-auto py-12 px-4 grid gap-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Home Page — Reusable Card Component
        </h1>

        <Card
          title="Welcome to SoloForge"
          content="This project teaches you how to build a modern Next.js application with reusable components."
        />

        <Card
          title="Learning Objectives"
          content="You will understand routing, components, API integration, TypeScript interfaces, and Tailwind styling."
        />

        <Card
          title="Reusable Components"
          content="This Card component is fully dynamic and can accept any title and content passed as props."
        />
      </main>
    </div>
  );
}
