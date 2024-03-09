import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { UnitOptions } from "../../constants/unit-options";

/**
 * Ingredident inputs and dropdown, dynamically added by a map
 * @param {index, data, onChange, onRemove} params Index = number in array, data = current array of data
 * @returns react prop of two inputs and a dropdown
 */
const IngredientInput = ({ index, data, onChange, onRemove }) => {
  return (
    <View key={index} style={{ flexDirection: "row" }}>
      <TextInput
        style={styles.input}
        value={data.name}
        onChangeText={(text) => onChange(index, { ...data, name: text })}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        value={data.amount}
        onChangeText={(text) => onChange(index, { ...data, amount: text })}
        placeholder="Amount"
      />
      <Picker
        selectedValue={data.measurement}
        onValueChange={(value) =>
          onChange(index, { ...data, measurement: value })
        }
      >
        {UnitOptions.map((option) => {
          return <Picker.Item label={option.label} value={option.value} />;
        })}
      </Picker>
      {index > 0 && (
        <Pressable onPress={() => onRemove(index)}>
          <Text>Remove</Text>
        </Pressable>
      )}
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
