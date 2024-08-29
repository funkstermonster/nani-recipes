import { Input } from "@nextui-org/input";
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
      <Input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Keresés..."
        className="mb-4 p-2 w-full md:w-1/2"
      />
    </div>
  );
}
