import { View, TextInput, StyleSheet } from "react-native";
import React, { useEffect, useState, forwardRef } from "react";
import Dropdown from "./dropdown";
import { Ingredient } from "../../types/recipe.type";
import { UnitOptions } from "../../constants/unit-options";

interface props {
  getIngredientData: (index: number, value: Ingredient) => void;
  index: number;
}

const IngredientInput = forwardRef<Ingredient, props>(function IngredientInput(
  props,
  ref
) {
  const [ingredient, setIngredient] = useState<Ingredient["ingredient"]>();
  const [amount, setAmount] = useState<Ingredient["amount"]>();
  const [unit, setUnit] = useState<Ingredient["unit"]>();

  const getDropDownData = (data: Ingredient["unit"]) => {
    setUnit(data);
  };

  console.log(ref);

  useEffect(() => {
    /**
     * This has to go inside a useEffect else it
     * keeps causing infinite rerenders
     */
    props.getIngredientData(props.index, { ingredient, amount, unit });
  }, [ingredient, amount, unit]);

  // TODO:
  // add validation that all ingredient inputs are valid

  return (
    <View style={{ flexDirection: "row" }}>
      {/* Ingredient input */}
      <TextInput
        style={styles.input}
        onChangeText={(e) => setIngredient(e)}
        placeholder="Ingredient"
        // value={}
      />
      <TextInput
        style={styles.input}
        onChangeText={(e) => setAmount(e)}
        placeholder="Amount"
      />
      <Dropdown options={UnitOptions} getDropdownData={getDropDownData} />
    </View>
  );
});

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
