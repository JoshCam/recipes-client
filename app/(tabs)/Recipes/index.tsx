import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Recipes = () => {
  return (
    <View>
      <Text>Recipes</Text>
      <Link href="recipes/ingredients">Ingredients</Link>
    </View>
  );
};

export default Recipes;
