import React from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = TouchableOpacityProps & {
  title: string;
};

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon}></Image>
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
