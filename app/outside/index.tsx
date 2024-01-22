import { View, Text } from "react-native";
import { Link } from "expo-router";
import React from "react";

const index = () => {
  return (
    <View>
      <Text>Outside</Text>
      <Link href="/(tabs)/Feed">Back to tabs</Link>
    </View>
  );
};

export default index;
