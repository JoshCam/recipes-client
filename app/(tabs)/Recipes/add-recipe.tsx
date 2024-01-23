import { View, Text } from "react-native";
import React from "react";
import AddRecipeForm from "../../../components/forms/add-recipe-form";

const AddRecipe = () => {
  // This is a good example of having another page within
  // the original three expo-router tabs
  // **This page won't necessarily stay, it's just a good example
  return (
    <View>
      <Text>Add your own Recipe</Text>
      <AddRecipeForm />
    </View>
  );
};

export default AddRecipe;
