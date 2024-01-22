import { Tabs } from "expo-router";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen name="Feed" />
      <Tabs.Screen name="Recipes" />
      <Tabs.Screen name="Profile" />
    </Tabs>
  );
};
