import { Card, CardFooter } from "@nextui-org/card";
import { Recipe } from "../model/recipe";
import { useModal } from "../stores/modal-store";
import { Image } from "@nextui-org/image";
import { motion } from "framer-motion";  // Import framer-motion

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const { onModalOpen } = useModal();

  const handleImageClick = (recipe: Recipe) => {
    onModalOpen("recipe-modal", recipe);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }} 
      key={recipe.id}
    >
      <Card
        isFooterBlurred
        radius="lg"
        className="border-none w-60"
      >
        <Image
          isZoomed
          alt={recipe.name}
          className="object-cover w-full h-40 cursor-pointer"
          height={160}
          src={recipe.image}
          width={240}
          onClick={() => handleImageClick(recipe)}
        />
        <CardFooter className="justify-center bg-black/20 border-white/20 border-t overflow-hidden py-1">
          <h3 className="text-black uppercase font-bold text-xs">
            {recipe.name}
          </h3>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
