import { create } from "zustand";
import { Recipe } from "../model/recipe";

export type ModalType = "recipe-modal"

interface ModalStore {
    type: ModalType | null;
    isModalOpen: boolean;
    onModalOpen: (type: ModalType, recipe: Recipe) => void;
    onModalClose: () => void;
    recipe: Recipe | null;
}

export const useModal = create<ModalStore>((set) => ({
    type: null,
    isModalOpen: false,
    recipe: null,
    onModalOpen: (type, recipe) => set({ isModalOpen: true, type, recipe }),
    onModalClose: () => set({ type: null, isModalOpen: false, recipe: null }),
}));