import React from "react";
import { View, Text, TextInput, Image, StatusBar } from "react-native";

import IllustrationImg from "../../assets/illustration.png";
import { styles } from "./styles";
import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      ></StatusBar>
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      ></Image>

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`}e organize suas jogatinas {`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
        <ButtonIcon title="Entrar com Discord"></ButtonIcon>
      </View>
    </View>
  );
}
