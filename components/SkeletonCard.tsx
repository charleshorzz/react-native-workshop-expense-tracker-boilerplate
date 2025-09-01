import { useThemeColor } from "@/hooks/useThemeColor";
import { View } from "react-native";

export const SkeletonCard = () => {
  const backgroundColor = useThemeColor({}, "background");

  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 16,
        marginBottom: 12,
        gap: 24,
        backgroundColor: backgroundColor === "#fff" ? "#f5f5f5" : "#2a2a2a",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.125,
        shadowRadius: 12,
        elevation: 16,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <View
            style={{
              width: 80,
              height: 16,
              backgroundColor:
                backgroundColor === "#fff" ? "#e0e0e0" : "#404040",
              borderRadius: 4,
              marginBottom: 8,
            }}
          />
          <View
            style={{
              width: 120,
              height: 24,
              backgroundColor:
                backgroundColor === "#fff" ? "#e0e0e0" : "#404040",
              borderRadius: 4,
            }}
          />
        </View>
        <View
          style={{
            width: 18,
            height: 18,
            backgroundColor: backgroundColor === "#fff" ? "#e0e0e0" : "#404040",
            borderRadius: 4,
          }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <View
            style={{
              width: 60,
              height: 14,
              backgroundColor:
                backgroundColor === "#fff" ? "#e0e0e0" : "#404040",
              borderRadius: 4,
              marginBottom: 4,
            }}
          />
          <View
            style={{
              width: 100,
              height: 16,
              backgroundColor:
                backgroundColor === "#fff" ? "#e0e0e0" : "#404040",
              borderRadius: 4,
            }}
          />
        </View>
        <View>
          <View
            style={{
              width: 60,
              height: 14,
              backgroundColor:
                backgroundColor === "#fff" ? "#e0e0e0" : "#404040",
              borderRadius: 4,
              marginBottom: 4,
            }}
          />
          <View
            style={{
              width: 100,
              height: 16,
              backgroundColor:
                backgroundColor === "#fff" ? "#e0e0e0" : "#404040",
              borderRadius: 4,
            }}
          />
        </View>
      </View>
    </View>
  );
};
