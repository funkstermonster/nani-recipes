"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { RecipeModalProps } from "../model/recipeModalProps";
import { Part } from "../model/part";
import { Button } from "@nextui-org/button";
import { useModal } from "../stores/modal-store";
import { Divider } from "@nextui-org/divider";

export default function recipeModal() {
  const { isModalOpen, onModalClose, type, recipe } = useModal();
  const isOpen = isModalOpen && type === "recipe-modal";

  if (!recipe) return null;

  return (
    <Modal
      backdrop="opaque"
      onOpenChange={onModalClose}
      isOpen={isOpen}
      radius="lg"
      classNames={{
        body: "bg-white py-6",
        backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
        base: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 relative mx-auto w-full p-[5px] rounded-lg",
        header: "bg-white border-b-black border-2 rounded-t-lg",
        footer: "bg-white border-t-black border-2 rounded-b-lg",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
    >
      <ModalContent className="text-black">
        <ModalHeader className="flex flex-col gap-1">
          <h2 className="text-xl font-bold">{recipe.name}</h2>
        </ModalHeader>
        <ModalBody>
          {recipe.parts.map((part: Part, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{part.partName}</h3>
              <ul className="list-disc list-inside space-y-1">
                {part.ingredients.map((ingredient, id) => (
                  <li key={id}>
                    <span className="font-medium">{ingredient.name}</span>:{" "}
                    {ingredient.quantity}
                  </li>
                ))}
              </ul>
              <p className="mt-2">{part.preparation}</p>
            </div>
          ))}
        </ModalBody>
        <ModalFooter>
          <Button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition-all hover:from-yellow-500 hover:to-pink-500" onPress={onModalClose}>Bezárás</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
