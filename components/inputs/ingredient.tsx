import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Dropdown from "./dropdown";
import { Ingredient } from "../../types/recipe.type";
import { UnitOptions } from "../../constants/unit-options";

const IngredientInput = ({ getIngredientData, index }) => {
  const [ingredient, setIngredient] = useState<Ingredient["ingredient"]>("");
  const [amount, setAmount] = useState<Ingredient["amount"]>("");
  const [unit, setUnit] = useState<Ingredient["unit"]>("grams");

  const getDropDownData = (data: Ingredient["unit"]) => {
    setUnit(data);
  };

  useEffect(() => {
    /**
     * This has to go inside a useEffect that listens to only unit else it
     * keeps causing infinite rerenders
     */
    getIngredientData(index, { ingredient, amount, unit });
  }, [unit]);

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
      <Dropdown options={UnitOptions} getDropdownData={getDropDownData} />
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
