import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { Ingredient, Recipe } from "../../types/recipe.type";
import IngredientInput from "../inputs/ingredient";

const AddRecipeForm = () => {
  const [recipe, setRecipe] = useState<Recipe>();
  const [recipeName, setRecipeName] = useState<Recipe["name"]>("");
  const [ingredients, setIngredients] = useState<Ingredient[]>();
  const [newIngredient, setNewIngredient] = useState<Ingredient>();

  const getIngredientData = (data) => {
    console.log("THIS", data);
    setNewIngredient(data);
  };

  return (
    <View>
      <Text>Add Recipe Form</Text>
      <TextInput
        style={styles.input}
        onChangeText={(e) => setRecipeName(e)}
        placeholder="Recipe Name"
      />
      <IngredientInput getIngredientData={getIngredientData} />
      <Pressable onPress={() => console.log(newIngredient)}>
        <Text>TEST</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default AddRecipeForm;
