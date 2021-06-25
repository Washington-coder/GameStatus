import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../../global/styles/theme";

type Props = {
  urlImage: string;
};

export function Avatar({ urlImage }: Props) {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.colors.secondary50, theme.colors.secondary70]}
    >
      <Image source={{ uri: urlImage }} style={styles.avatar}></Image>
    </LinearGradient>
  );
}
