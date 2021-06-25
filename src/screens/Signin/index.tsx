import React from "react";
import { View, Text, TextInput, Image } from "react-native";

import IllustrationImg from "../../assets/illustration.png";
import { styles } from "./styles";
import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn() {
  return (
    <View style={styles.container}>
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
        <ButtonIcon title="Entre com Discord"></ButtonIcon>
      </View>
    </View>
  );
}
