import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Profile } from "../../components/Profile";
import { CategorySelect } from "../../components/CategorySelect";
import { ButtonAdd } from "../../components/ButtonAdd";

export function Home() {
  return (
    <View>
      <View style={styles.header}>
        <Profile></Profile>
        <ButtonAdd></ButtonAdd>
      </View>
      <View>
        <CategorySelect></CategorySelect>
      </View>
    </View>
  );
}
