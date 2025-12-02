import React from "react";
import { type CardProps } from "@/interfaces";

export default function Card({ title, content }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}
