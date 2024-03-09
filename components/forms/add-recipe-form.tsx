import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import { Ingredient, Recipe } from "../../types/recipe.type";
import IngredientInput from "../inputs/ingredient";

const AddRecipeForm = () => {
  const [recipe, setRecipe] = useState({});
  const [recipeName, setRecipeName] = useState<Recipe["name"]>("");
  const [ingredientsData, setIngredientsData] = useState([
    { name: "", amount: "", measurement: "" },
  ]);

  const handleAddPart = () => {
    setIngredientsData([
      ...ingredientsData,
      { name: "", amount: "", measurement: "" },
    ]);
  };

  const handleChange = (index, newData) => {
    setIngredientsData((prevData) =>
      prevData.map((item, i) => (i === index ? newData : item))
    );
  };

  const handleRemovePart = (index) => {
    setIngredientsData((prevData) => prevData.filter((_, i) => i !== index));
  };

  return (
    <View>
      <Text>Add Recipe Form</Text>
      <TextInput
        style={styles.input}
        onChangeText={(e) => setRecipeName(e)}
        placeholder="Recipe Name"
      />
      <View>
        {ingredientsData.map((data, index) => (
          <IngredientInput
            key={index}
            index={index}
            data={data}
            onChange={handleChange}
            onRemove={handleRemovePart}
          />
        ))}
        <Pressable onPress={handleAddPart}>
          <Text>Add Another Part</Text>
        </Pressable>
      </View>
      {/* Test button */}
      <Pressable
        onPress={async () => {
          setRecipe({ name: recipeName, ingredientsData: ingredientsData });
          console.log(recipe);
        }}
      >
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
