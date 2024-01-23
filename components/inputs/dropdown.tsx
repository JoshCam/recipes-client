import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { View, Text } from "react-native";
import { Ingredient } from "../../types/recipe.type";

const Dropdown = ({ getDropdownData }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const placeholder = {
    label: "Select an option...",
    value: "",
  };

  const options: { label: Ingredient["unit"]; value: Ingredient["unit"] }[] = [
    { label: "grams", value: "grams" },
    { label: "ml", value: "ml" },
    { label: "tbs", value: "tbs" },
    { label: "tsp", value: "tsp" },
  ];

  // Sends data back up to main form on change
  getDropdownData(selectedValue);

  return (
    <View>
      <Text>Select an option:</Text>
      {/* Have to style this eventually */}
      <RNPickerSelect
        placeholder={placeholder}
        items={options}
        onValueChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      />
    </View>
  );
};

export default Dropdown;
