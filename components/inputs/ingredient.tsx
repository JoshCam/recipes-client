import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Dropdown from "./dropdown";
import { Ingredient } from "../../types/recipe.type";

const IngredientInput = ({ getIngredientData }) => {
  const [ingredient, setIngredient] = useState<Ingredient["ingredient"]>("");
  const [amount, setAmount] = useState<Ingredient["amount"]>("");
  const [unit, setUnit] = useState<Ingredient["unit"]>("grams");

  const getDropDownData = (data) => {
    setUnit(data);
  };

  getIngredientData({ ingredient, amount, unit });

  return (
    <View style={{ flexDirection: "row" }}>
      {/* Ingredient input */}
      <TextInput
        style={styles.input}
        onChangeText={(e) => setIngredient(e)}
        placeholder="Ingredient"
      />
      <TextInput
        style={styles.input}
        onChangeText={(e) => setAmount(e)}
        placeholder="Amount"
      />
      <Dropdown getDropdownData={getDropDownData} />
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

export default IngredientInput;
