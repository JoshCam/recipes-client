import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

const FormPart = ({ index, data, onChange, onRemove }) => {
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
        value={data.description}
        onChangeText={(text) => onChange(index, { ...data, description: text })}
        placeholder="Description"
      />
      <Picker
        selectedValue={data.option}
        onValueChange={(value) => onChange(index, { ...data, option: value })}
      >
        <Picker.Item label="Option 1" value="option1" />
        <Picker.Item label="Option 2" value="option2" />
        {/* Add more Picker.Item elements for additional options */}
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

export default FormPart;
