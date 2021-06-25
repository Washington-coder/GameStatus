import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Profile } from "../../components/Profile";

export function Home() {
  return (
    <View>
      <View style={styles.header}>
        <Profile></Profile>
      </View>
    </View>
  );
}
