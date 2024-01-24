import { Ingredient } from "../types/recipe.type";

export const UnitOptions: {
  label: Ingredient["unit"];
  value: Ingredient["unit"];
}[] = [
  { label: "grams", value: "grams" },
  { label: "ml", value: "ml" },
  { label: "tbs", value: "tbs" },
  { label: "tsp", value: "tsp" },
];
