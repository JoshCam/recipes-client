import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRef, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { Ingredient, Recipe } from "../../types/recipe.type";
import IngredientInput from "../inputs/ingredient";

const AddRecipeForm = () => {
  const [recipe, setRecipe] = useState<Recipe>();
  const [recipeName, setRecipeName] = useState<Recipe["name"]>("");
  // Gets set for each new ingredient that gets added
  const [newIngredient, setNewIngredient] = useState<Ingredient>();
  // all our input fields are tracked with this array
  const ingredients = useRef<Ingredient[]>([newIngredient]);
  // our number of ingredient inputs
  const [numInputs, setNumInputs] = useState(1);

  const getIngredientData = (index: number, value) => {
    // Store input value to ingredients array to track them
    const inputs = ingredients.current;
    inputs[index] = value;
    // set value to the input field on change
    setNewIngredient(value);
  };

  const addInput = () => {
    // Add a new element
    ingredients.current.push({
      ingredient: undefined,
      amount: undefined,
      unit: undefined,
    });
    // increase the number of inputs
    setNumInputs((value) => value + 1);
  };

  const removeInput = (i: number) => {
    // remove from the array by index value
    ingredients.current.splice(i, 1)[0];
    // decrease the number of inputs
    setNumInputs((value) => value - 1);
  };

  const inputs: JSX.Element[] = [];
  for (let i = 0; i < numInputs; i++) {
    inputs.push(
      <View key={i}>
        <IngredientInput getIngredientData={getIngredientData} index={i} />
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
      <Pressable onPress={() => console.log(ingredients)}>
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
