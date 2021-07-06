import React from "react";

import { TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";

export function SmallInput({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.container}
      {...rest}
      /** MUDAR O TECLADO APENAS PARA NUMERICO -> */ keyboardType="numeric"
    />
  );
}
