import React from "react";

interface RecipeSearchProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function RecipeSearch({
  searchQuery,
  setSearchQuery,
}: RecipeSearchProps) {
  return (
    <div className="p-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className="mb-4 p-2 border border-gray-300 rounded"
      />
    </div>
  );
}
