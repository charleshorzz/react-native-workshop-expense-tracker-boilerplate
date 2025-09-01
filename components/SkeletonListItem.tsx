import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, View } from "react-native";

export const SkeletonListItem = () => {
  const backgroundColor = useThemeColor({}, "background");

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: backgroundColor === "#fff" ? "#f5f5f5" : "#2a2a2a" },
      ]}
    >
      <View
        style={{
          width: 60,
          height: 16,
          backgroundColor: backgroundColor === "#fff" ? "#e0e0e0" : "#404040",
          borderRadius: 4,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 100,
    marginVertical: 10,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
});
