import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";

export function Home() {
  const [category, setCategory] = useState("");

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <View>
      <View style={styles.header}>
        <Profile></Profile>
        <ButtonAdd></ButtonAdd>
      </View>
      <View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
        <View style={styles.content}>
          <ListHeader title="Partidas agendadas" subtitle="Total 6" />
        </View>
      </View>
    </View>
  );
}
