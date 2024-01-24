import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRef, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { Ingredient, Recipe } from "../../types/recipe.type";
import IngredientInput from "../inputs/ingredient";

const AddRecipeForm = () => {
  const [recipe, setRecipe] = useState<Recipe>();
  const [recipeName, setRecipeName] = useState<Recipe["name"]>("");
  const [ingredients, setIngredients] = useState<Ingredient[]>();
  const [newIngredient, setNewIngredient] = useState<Ingredient>();

  // this will be attached with each input onChangeText
  const [textValue, setTextValue] = useState();
  // our number of inputs, we can add the length or decrease
  const [numInputs, setNumInputs] = useState(1);
  // all our input fields are tracked with this array
  const refInputs = useRef<string[]>([textValue]);

  const getIngredientData = (data) => {
    debugger;
    console.log("THIS", data);
    setTextValue(data);
  };

  const setInputValue = (index: number, value) => {
    // Store input value to refInputs array to track them
    const inputs = refInputs.current;
    inputs[index] = value;
    // set value to the input field on change
    setTextValue(value);
  };

  const addInput = () => {
    // Add a new element
    refInputs.current.push("");
    // increase the number of inputs
    setNumInputs((value) => value + 1);
  };

  const removeInput = (i: number) => {
    // remove from the array by index value
    refInputs.current.splice(i, 1)[0];
    // decrease the number of inputs
    setNumInputs((value) => value - 1);
  };

  const inputs: JSX.Element[] = [];
  for (let i = 0; i < numInputs; i++) {
    inputs.push(
      <View key={i}>
        <IngredientInput getIngredientData={setInputValue} index={i} />
        <Pressable onPress={() => removeInput(i)}>
          <Text>-</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View>
      <Text>Add Recipe Form</Text>
      <TextInput
        style={styles.input}
        onChangeText={(e) => setRecipeName(e)}
        placeholder="Recipe Name"
      />
      {inputs}
      <Pressable onPress={addInput}>
        <Text>+ Add New Ingredient</Text>
      </Pressable>
      {/* Test button */}
      <Pressable onPress={() => console.log(refInputs)}>
        <Text>TEST</Text>
      </Pressable>
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
