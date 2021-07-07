import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { ModalView } from "../../components/ModalView";
import { RectButton } from "react-native-gesture-handler";
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Guilds } from "../Guilds";
import { Background } from "../../components/Background";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { GuildIcon } from "../../components/GuildIcon";
import { theme } from "../../../global/styles/theme";
import { styles } from "./styles";
import { GuildProps } from "../../components/Guild";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");
  const [openGuildsModa, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleCloseGuilds() {
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

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
      <Background>
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
            setCategory={handleCategorySelect}
            categorySelected={category}
          ></CategorySelect>

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {guild.icon ? <GuildIcon /> : <View style={styles.image} />}

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {" "}
                    {guild.name ? guild.name : "Selecione um servidor"}
                  </Text>
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
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Dia e mês
                </Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}> / </Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Hora e minuto
                </Text>
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
      </Background>
      <ModalView visible={openGuildsModa} closeModal={handleCloseGuilds}>
        <Guilds handleGuildSelect={handleGuildSelect}></Guilds>
      </ModalView>
    </KeyboardAvoidingView>
  );
}
