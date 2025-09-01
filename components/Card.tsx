import { useThemeColor } from "@/hooks/useThemeColor";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { View } from "react-native";
import { HelloWave } from "./HelloWave";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { IconSymbol } from "./ui/IconSymbol";

const Card = () => {
  return (
    <ThemedView
      style={{
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 16,
        marginBottom: 12,
        gap: 24,
        backgroundColor:
          useThemeColor({}, "background") === "#fff" ? "#f5f5f5" : "#2a2a2a",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.125,
        shadowRadius: 12,
        elevation: 16, // For Android shadow
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <ThemedText type="defaultSemiBold">Total Balance</ThemedText>
          <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
            <HelloWave />
            <ThemedText type="subtitle">2,548.00</ThemedText>
          </View>
        </View>
        <Ionicons
          name="ellipsis-vertical"
          size={18}
          color={useThemeColor({}, "opposite")}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
            <IconSymbol
              name="arrow.down"
              size={14}
              color={useThemeColor({}, "opposite")}
            />
            <ThemedText type="default">Income</ThemedText>
          </View>
          <ThemedText type="defaultSemiBold">RM 10,840.00</ThemedText>
        </View>
        <View>
          <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
            <IconSymbol
              name="arrow.up"
              size={14}
              color={useThemeColor({}, "opposite")}
            />
            <ThemedText type="default">Expense</ThemedText>
          </View>
          <ThemedText type="defaultSemiBold">RM 1,843.00</ThemedText>
        </View>
      </View>
    </ThemedView>
  );
};

export default Card;
