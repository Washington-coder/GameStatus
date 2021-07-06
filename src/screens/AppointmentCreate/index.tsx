import React, { useState } from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Background } from "../../components/Background";
import { RectButton } from "react-native-gesture-handler";
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from "../../components/Header";
import { GuildIcon } from "../../components/GuildIcon";
import { theme } from "../../../global/styles/theme";
import { styles } from "./styles";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");

  const members = [
    {
      id: "1",
      username: "Rodrigo",
      avatar_url: "https://github.com/Washington-coder.png",
      status: "online",
    },
    {
      id: "2",
      username: "Rodrigo",
      avatar_url: "https://github.com/Washington-coder.png",
      status: "offline",
    },
  ];
  return (
    <Background>
      <Header title="Agendar partida" />
      <Text
        style={[
          styles.label,
          { marginLeft: 24, marginBottom: 18, marginTop: 18 },
        ]}
      >
        Categoria
      </Text>
      <CategorySelect
        hasCheckBox
        setCategory={setCategory}
        categorySelected={category}
      ></CategorySelect>

      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            {
              // <View style={styles.image} />
              <GuildIcon />
            }

            <View style={styles.selectBody}>
              <Text style={styles.label}> Selecione um servidor</Text>
            </View>
            <Feather
              name="chevron-right"
              color={theme.colors.heading}
              size={18}
            />
          </View>
        </RectButton>
      </View>
    </Background>
  );
}
