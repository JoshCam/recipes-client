import { Stack } from "expo-router";

export default () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: true, headerTitle: "Recipes App" }}
      />
    </Stack>
  );
};
