import { Tabs } from "expo-router";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen name="Feed" options={{ headerShown: false }} />
      <Tabs.Screen name="Recipes" />
      <Tabs.Screen name="Profile" />
    </Tabs>
  );
};
