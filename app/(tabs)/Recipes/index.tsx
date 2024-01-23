import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Recipes = () => {
  return (
    <View>
      <Text>Recipes</Text>
      <View>
        <Text>Add a recipe</Text>
        <Link href="/recipes/add-recipe">+</Link>
      </View>
      {/* <Link href="recipes/ingredients">Ingredients</Link> */}
    </View>
  );
};

export default Recipes;
