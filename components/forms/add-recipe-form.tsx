import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import {Picker} from '@react-native-picker/picker';
import React, { useState } from 'react';
// import { TextInput } from "react-native-gesture-handler";
import { Ingredient, Recipe } from "../../types/recipe.type";
import IngredientInput from "../inputs/ingredient";

const AddRecipeForm = () => {
  const [recipe, setRecipe] = useState<Recipe>();
  // const [recipeName, setRecipeName] = useState<Recipe["name"]>("");
  // // Gets set for each new ingredient that gets added
  // const [newIngredient, setNewIngredient] = useState<Ingredient>();
  // // all our input fields are tracked with this array
  // const ingredients = useRef<Ingredient[]>([newIngredient] ?? null);
  // // our number of ingredient inputs
  // const [numInputs, setNumInputs] = useState(1);

  const FormPart = ({ index, data, onChange, onRemove }) => {
    return (
      <View key={index}>
        <TextInput
          value={data.name}
          onChangeText={(text) => onChange(index, { ...data, name: text })}
          placeholder="Name"
        />
        <TextInput
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
        {index > 0 && <Pressable onPress={() => onRemove(index)}>Remove</Pressable>}
      </View>
    );
  };

    const [formData, setFormData] = useState([]);
  
    const handleAddPart = () => {
      setFormData([...formData, { name: '', description: '', option: 'option1' }]);
    };
  
    const handleChange = (index, newData) => {
      setFormData((prevData) =>
        prevData.map((item, i) => (i === index ? newData : item))
      );
    };
  
    const handleRemovePart = (index) => {
      setFormData((prevData) => prevData.filter((_, i) => i !== index));
    };

  return (
    <View>
      {/* <Text>Add Recipe Form</Text>
      <TextInput
        style={styles.input}
        onChangeText={(e) => setRecipeName(e)}
        placeholder="Recipe Name"
      /> */}
      <View>
      {formData.map((data, index) => (
        <FormPart
          key={index}
          index={index}
          data={data}
          onChange={handleChange}
          onRemove={handleRemovePart}
        />
      ))}
      <Pressable onPress={handleAddPart}>Add Another Part</Pressable>
    </View>
      {/* Test button */}
      {/* <Pressable onPress={() => console.log(ingredients)}>
        <Text>TEST</Text>
      </Pressable> */}
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

export default AddRecipeForm;
