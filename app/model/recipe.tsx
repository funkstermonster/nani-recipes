import { Part } from "./part";

export interface Recipe {
    id: number;
    name: string;
    parts: Part[];
    image: string;
}