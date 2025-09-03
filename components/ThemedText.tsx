import { StyleSheet, Text, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "cardText"
    | "cardTextBold"
    | "cardSmallText"
    | "cardTextSemiBold";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        type === "cardText" ? styles.cardText : undefined,
        type === "cardTextBold" ? styles.cardTextBold : undefined,
        type === "cardTextSemiBold" ? styles.cardTextSemiBold : undefined,
        type === "cardSmallText" ? styles.cardSmallText : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Saira", // add or update your font here
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Saira", // add or update your font here
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 40,
    fontFamily: "Saira", // add or update your font here
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Saira", // add or update your font here
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
    fontFamily: "Saira", // add or update your font here
  },
  cardText: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Saira", // add or update your font here
  },
  cardSmallText: {
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 15,
    fontFamily: "Saira", // add or update your font here
  },
  cardTextSemiBold: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 18,
    fontFamily: "Saira", // add or update your font here
  },
  cardTextBold: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    fontFamily: "Saira", // add or update your font here
  },
});
