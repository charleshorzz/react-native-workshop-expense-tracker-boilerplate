import Card from "@/components/Card";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  // ============== ANIMATION ==============
  const scrollY = useRef(new Animated.Value(0)).current;
  const isLightMode = useThemeColor({}, "background") === "#fff";

  // Animate background from original color → transparent
  const headerBgColor = scrollY.interpolate({
    inputRange: [0, 250], // scroll distance
    outputRange: isLightMode
      ? ["rgba(255,255,255,1)", " rgba(255,255,255,0.75)"]
      : ["rgba(21,23,24,1)", " rgba(21,23,24,0.85)"],
    extrapolate: "clamp",
  });

  const textOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0], // fully visible → invisible
    extrapolate: "clamp",
  });

  const textTranslateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -20], // move slightly up while fading
    extrapolate: "clamp",
  });

  return (
    <View style={{ flex: 1, backgroundColor: useThemeColor({}, "background") }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ThemedView
          style={{
            flex: 1,
            paddingHorizontal: 16,
            paddingVertical: 8,
            gap: 20,
          }}
        >
          <Animated.View
            style={[
              styles.header,
              {
                backgroundColor: headerBgColor,
              },
            ]}
          >
            <Animated.Text
              style={{
                opacity: textOpacity,
                transform: [{ translateY: textTranslateY }],
                fontWeight: "600",
                fontSize: 16,
                color: useThemeColor({}, "text"),
              }}
            >
              Hi, Hacker
            </Animated.Text>
            <Ionicons
              size={28}
              name="add-circle-outline"
              color={useThemeColor({}, "opposite")}
            />
          </Animated.View>
          <Animated.ScrollView
            contentContainerStyle={{ paddingTop: 40 }}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: false }
            )}
          >
            <Card />
            {/* Mock content */}
            {Array.from({ length: 15 }).map((_, i) => (
              <View
                key={i}
                style={[
                  styles.card,
                  { backgroundColor: isLightMode ? "#f5f5f5" : "#2a2a2a" },
                ]}
              >
                <ThemedText>Card {i + 1}</ThemedText>
              </View>
            ))}
          </Animated.ScrollView>
        </ThemedView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  card: {
    height: 120,
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
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 40,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    zIndex: 10,
  },
});
