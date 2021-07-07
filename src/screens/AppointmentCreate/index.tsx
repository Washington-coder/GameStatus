import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Background } from "../../components/Background";
import { RectButton } from "react-native-gesture-handler";
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
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
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
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
          <View style={styles.field}>
            <View>
              <Text style={styles.label}>Dia e mês</Text>
              <View style={styles.column}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}> / </Text>
                <SmallInput maxLength={2} />
              </View>
            </View>
            <View>
              <Text style={styles.label}>Hora e minuto</Text>
              <View style={styles.column}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}> : </Text>
                <SmallInput maxLength={2} />
              </View>
            </View>
          </View>

          <View style={[styles.field, { marginBottom: 12 }]}>
            <Text style={styles.label}>Descrição</Text>
            <Text style={styles.caracteresLimit}>Max. 100 caracteres</Text>
          </View>

          <TextArea
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
          />

          <View style={styles.footer}>
            <Button title="Agendar"></Button>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
