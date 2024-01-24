import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { View, Text } from "react-native";

const Dropdown = ({ getDropdownData, options }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const placeholder = {
    label: "Select an option...",
    value: "",
  };

  // Set dropdown options to props
  const dynamicOptions = options;

  return (
    <View>
      <Text>Select an option:</Text>
      {/* Have to style this eventually */}
      <RNPickerSelect
        placeholder={placeholder}
        items={dynamicOptions}
        onValueChange={(value) => {
          setSelectedValue(value);
          // Sends data back up to main form on change
          getDropdownData(value);
        }}
        value={selectedValue}
      />
    </View>
  );
};

export default Dropdown;
