# React Native Expense Tracker Application Workshop

## Pre-requisites

1. You need to have Expo Go installed on your physical device![Expo Go](data:image/png;base64,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) 

- Can be downloaded in App Store or Google Play Store

2. [Node.js](https://nodejs.org/en/download/) is installed
3. VS Code or other IDE is installed

## Before started

1. You can either run the command below to start your expo application
   ```bash
   npx create-expo-app@latest expenseTracker
   ```

or clone this repo to get started (Recommended, with preconfigured components)

#### Terminal Method
```
mkdir react-native-workshop
cd react-native-workshop
git clone https://github.com/charleshorzz/react-native-workshop-expense-tracker-boilerplate.git
```

#### Visual Studio Code Method
```
1. Create a folder
2. Open the folder in Visual Studio Code
3. Open Terminal, select git bash
4. Run the command below

git clone https://github.com/charleshorzz/react-native-workshop-expense-tracker-boilerplate.git
```


## Checkpoint 1: Get started

1. Go into expenseTracker directory

   ```bash
   cd react-native-workshop-expense-tracker-boilerplate
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

4. Due to time constraint, we will run the expo application using Expo Go to save the set up time, if simulators are installed, they're welcomed to be used

5. Scan the QR code using physical device, if the app is built on your device, you've passed the first checkpoint
** Log in for Expo go is required for first time use

## Checkpoint 2: Set up

2a. Change custom fonts

- You can download a font from [Google Fonts](https://fonts.google.com/selection)
- Or use the pre-downloaded Saira fonts in assets/fonts

To change the fonts in React Native

In app/\_layout.tsx, change the fonts from SpaceMono to Saira

```bash
  Saira: require("../assets/fonts/Saira-Regular.ttf"),
```

Then, update in ThemedText.tsx, make sure every styles included fontFamily. For example,

```bash
    default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Saira", // newly added
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Saira", // newly added
  },
```

2b. Add or change custom colors

- You can use preferred colour throughout the project
- Or use the default colour (recommended as dark mode is supported)

In Colors.ts,

```bash
export const Colors = {
  light: {
    ...
    tabIconSelected: tintColorLight,
    opposite: "#151718", // newly added
  },
  dark: {
    ...
    tabIconSelected: tintColorDark,
    opposite: "#fff", // newly added
  },
};
```

2c. Refactor the Home Page

Open index.tsx, remove all the code and paste the code below to start

```bash
import Card from "@/components/Card";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
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
          <View style={[styles.header]}>
            <Text
              style={{
                fontSize: 16,
                color: useThemeColor({}, "text"),
              }}
            >
              Hi, Hacker
            </Text>
            <Ionicons
              size={28}
              name="add-circle-outline"
              color={useThemeColor({}, "opposite")}
            />
          </View>
          <ScrollView
            contentContainerStyle={{ paddingTop: 40 }}
            scrollEventThrottle={16}
          >
            <Card />
            {/* Mock content */}
            {Array.from({ length: 15 }).map((_, i) => (
              <View key={i} style={styles.card}>
                <ThemedText>Card {i + 1}</ThemedText>
              </View>
            ))}
          </ScrollView>
        </ThemedView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
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
  card: {
    height: 120,
    margin: 10,
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

```

## Checkpoint 3: Design

3a. Animation with React Native Reanimated

To play with the animation example, open HelloWave.tsx

```bash
export function HelloWave() {
  const rotationAnimation = useSharedValue(0);

  useEffect(() => {
    rotationAnimation.value = withRepeat(
      withSequence(
        withTiming(25, { duration: 150 }),
        withTiming(0, { duration: 150 })
      ),
      10 // Change this value to see the changes
    );
  }, [rotationAnimation]);
```

To implement animation in HomeScreen, open index.tsx and add the animation function

```bash
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
```

Transform the View, Text and ScrollView into Animated components

```bash
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
onScroll={Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
)}
>
<Card />
{/* Mock content */}
{Array.from({ length: 15 }).map((_, i) => (
    <View key={i} style={styles.card}>
    <ThemedText>Card {i + 1}</ThemedText>
    </View>
))}
</Animated.ScrollView>
```

## Checkpoint 4: Set Up GraphQL

GraphQL Endpoint

```
https://147d60b740bb.ngrok-free.app/graphql
```

Here is some preconfigured query and mutation as example, can try it in the graphql playground

```
mutation createOneTransaction {
  createOneTransaction(
    input: {
      amount: 5
      category: TRANSPORTATION
      remarks: "Sunway Toll"
      type: EXPENSE
    }
  ) {
    id
    category
    amount
  }
}

mutation updateOneTransaction {
  updateOneTransaction(id: 1, input: { remarks: "Bought Python 101" }) {
    id
  }
}

query getTransactions {
  getTransactions(filter: {
    type: {eq: EXPENSE}
    and: {category: {eq: FOOD}}
  }) {
    nodes {
      type
      amount
      category
      remarks
    }
    totalCount
  }
}

query getTransaction {
  getTransaction(id: 1) {
    amount
    category
  }
}

```

1. Install Packages

```
npm install @apollo/client rxjs graphql
```

```
npm install --save-dev @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo @graphql-codegen/client-preset
```

2. Set up Apollo client, create a new file called ApolloClient.ts at root

```
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://147d60b740bb.ngrok-free.app/graphql" }),
  cache: new InMemoryCache(),
  });

export default client;
```

3. Wrap the application using ApolloProvider

```
<ApolloProvider client={client}> // newly added
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
</ApolloProvider>
```

## Checkpoint 5: Set up React Apollo Query

1. Create a file called codegen.yml at root and paste the config below

```
overwrite: true
schema: "https://147d60b740bb.ngrok-free.app/graphql"
documents: "libs/**/*.graphql"
generates:
  libs/generated/graphql.ts:
    plugins:
      - typescript
      - typescript-operations
      - typescript-react-apollo
    config:
      withHooks: true
      withComponent: false
      withHOC: false
      reactApolloVersion: 3
      apolloReactCommonImportFrom: "@apollo/client"
      apolloReactHooksImportFrom: "@apollo/client/react"
```

2. Create a new folder called libs at root, under the libs folder, create a file called index.graphql

3. Open package.json, add new command, generate:graphql as below

```
 "scripts": {
    "start": "expo start",
    "reset-project": "node ./scripts/reset-project.js",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "lint": "expo lint",
    "generate:graphql": "graphql-codegen --config codegen.yml" // newly added
  },
```

4. Inside the index.graphql file created just now, write the query, mutation and fragment required

```
# ==========   Query   ==============

query getTransaction($id: Int!) {
  getTransaction(id: $id) {
    ...TransactionInfo
  }
}

query getTransactions(
  $filter: TransactionDtoFilter!
  $paging: OffsetPaging! = { limit: 10 }
  $sorting: [TransactionDtoSort!]! = [{ direction: DESC, field: createdAt }]
) {
  getTransactions(filter: $filter, paging: $paging, sorting: $sorting) {
    nodes {
      ...TransactionInfo
    }
    pageInfo {
      ...OffsetPageInfo
    }
    totalCount
  }
}

# ===========   Mutation   =============
mutation createOneTransaction($input: CreateTransactionInput!) {
  createOneTransaction(input: $input) {
    ...TransactionInfo
  }
}

mutation updateOneTransaction($id: Int!, $input: UpdateTransactionInput!) {
  updateOneTransaction(id: $id, input: $input) {
    ...TransactionInfo
  }
}

# ===========   Fragment   =============
fragment TransactionInfo on TransactionDto {
  id
  category
  createdAt
  remarks
  type
  amount
  updatedAt
}

fragment OffsetPageInfo on OffsetPageInfo {
  hasNextPage
  hasPreviousPage
}
```

5. Run the command below to generate types and react query for the graphql resolver wroted above

```
npm run generate:graphql
```

6. Notice that under the libs folder, graphql.ts will be auto-generated

## Checkpoint 6: Integrate GraphQL in home screen

1. Open index.tsx, below is a simple example to get transactions

```
const { data, loading, refetch } = useGetTransactionsQuery({
    variables: {
      filter: {},
    },
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true,
});

// Or pass in filter, paging and sorting to get specific result
const { data, loading, refetch } = useGetTransactionsQuery({
    variables: {
      filter: {
        type: {
          eq: TransactionType.Expense,
        },
        category: {
          eq: TransactionCategory.Food,
        },
      },
      paging: {
        limit: 10,
      },
      sorting: {
        direction: SortDirection.Desc,
        field: TransactionDtoSortFields.CreatedAt,
      }
    },
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true,
});
```

2.  I've provive a refined design below to be pasted into index.tsx to show how data fetched can be passed into frontend

```
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";

import Card from "@/components/Card";
import { SkeletonCard } from "@/components/SkeletonCard";
import { SkeletonListItem } from "@/components/SkeletonListItem";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getCategoryEmoji } from "@/constants/categoryEmojis";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useGetTransactionsQuery } from "@/libs/generated/graphql";
import dayjs from "dayjs";
import { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  // ================== STATE ================================
  const [refreshing, setRefreshing] = useState(false);

  // ================== API ================================
  const { data, loading, refetch } = useGetTransactionsQuery({
    variables: {
      filter: {},
    },
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true,
  });

  // ================== HANDLERS ================================
  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await refetch();
    } catch (error) {
      console.error("Error refreshing data:", error);
    } finally {
      setRefreshing(false);
    }
  };

  // ================== ANIMATION ================================

  const scrollY = useRef(new Animated.Value(0)).current;
  const isLight = useThemeColor({}, "background") === "#fff";

  // Animate background from white → transparent
  const headerBg = scrollY.interpolate({
    inputRange: [0, 250], // scroll distance
    outputRange: isLight
      ? ["rgba(255,255,255,1)", " rgba(255,255,255,0.75)"]
      : ["rgba(21,23,24,1)", " rgba(21,23,24,0.85)"],
    extrapolate: "clamp",
  });

  // Inside HomeScreen component
  const textOpacity = scrollY.interpolate({
    inputRange: [0, 100], // scroll distance
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
          <Animated.View style={[styles.header, { backgroundColor: headerBg }]}>
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
            <TouchableOpacity
              onPress={() => {
                console.log("add button pressed");
              }}
            >
             <Ionicons
                size={30}
                name="add-circle-sharp"
                color={useThemeColor({}, "opposite")}
              />
            </TouchableOpacity>
          </Animated.View>
          {/* Scrollable Content */}
          {loading ? (
            <Animated.ScrollView
              contentContainerStyle={{ paddingTop: 40 }}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: false }
              )}
              scrollEventThrottle={16}
              showsVerticalScrollIndicator={false}
            >
              <SkeletonCard />
              <View>
                {Array.from({ length: 8 }).map((_, i) => (
                  <SkeletonListItem key={`skeleton-${i}`} />
                ))}
              </View>
            </Animated.ScrollView>
          ) : data?.getTransactions.totalCount &&
            data?.getTransactions.totalCount > 0 ? (
            <Animated.FlatList
              data={data?.getTransactions.nodes}
              keyExtractor={(transaction) => transaction.id.toString()}
              contentContainerStyle={{ paddingTop: 40 }}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: false }
              )}
              scrollEventThrottle={32}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<Card />}
              refreshing={refreshing}
              onRefresh={onRefresh}
              renderItem={({ item: transaction }) => (
                <View
                  key={transaction.id}
                  style={[
                    styles.card,
                    { backgroundColor: isLight ? "#f5f5f5" : "#2a2a2a" },
                  ]}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ flexDirection: "row", gap: 12 }}>
                      <ThemedText type="defaultSemiBold">
                        {getCategoryEmoji(transaction.category)}
                      </ThemedText>
                      <View style={{ gap: 2 }}>
                        <ThemedText type="cardTextSemiBold">
                          {transaction.category}
                        </ThemedText>
                        <ThemedText type="cardSmallText">
                          {dayjs(transaction.createdAt).format(
                            "MMM D, YYYY h:mm A"
                          )}
                        </ThemedText>
                        <ThemedText type="cardText">
                          {transaction.remarks}
                        </ThemedText>
                      </View>
                    </View>
                    <View>
                      <ThemedText type="cardTextBold">
                        {transaction.type === "EXPENSE" ? "-RM" : "RM"}
                        {transaction.amount.toFixed(2)}
                      </ThemedText>
                    </View>
                  </View>
                </View>
              )}
            />
          ) : (
            <View style={{ paddingTop: 40 }}>
              <Card />
              <View>
                <ThemedText type="default">No transactions found.</ThemedText>
              </View>
            </View>
          )}
        </ThemedView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 40,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    flexDirection: "row",
    zIndex: 10,
  },
  card: {
    marginVertical: 10,
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
});
```

3. To call mutation, which is to create/update/delete, the example is as below

```
const [createOneTransaction, { loading }] = useCreateOneTransactionMutation(
    {}
);

//Call it Here
const result = await createOneTransaction({
      variables: {
        input: {
          amount: parseFloat(amount),
          category: category as TransactionCategory,
          remarks,
          type,
        },
      },
});
```

## Extra: Implement Infinite Scroll for transactions, using ApolloClient Cache

ApolloClient.ts

```
// src/ApolloClient.js
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://147d60b740bb.ngrok-free.app/graphql" }),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getTransactions: {
            keyArgs: ["filter", "sorting"],
            merge(existing, incoming, { args }) {
              if (!existing) {
                return incoming;
              }

              // If offset is 0, it's a refresh, so replace the data
              if (args?.paging?.offset === 0) {
                return incoming;
              }

              // Otherwise, merge the nodes
              const existingNodes = existing.nodes || [];
              const incomingNodes = incoming.nodes || [];

              // Create a Set of existing IDs to prevent duplicates
              const existingIds = new Set(
                existingNodes.map((node: any) => node.id)
              );

              const newNodes = incomingNodes.filter(
                (node: any) => !existingIds.has(node.id)
              );

              const result = {
                ...incoming,
                nodes: [...existingNodes, ...incomingNodes],
              };

              return result;
            },
          },
        },
      },
    },
  }),
});

export default client;
```

Index.tsx

```
import {
  ActivityIndicator,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import Card from "@/components/Card";
import { SkeletonCard } from "@/components/SkeletonCard";
import { SkeletonListItem } from "@/components/SkeletonListItem";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { getCategoryEmoji } from "@/constants/categoryEmojis";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useGetTransactionsQuery } from "@/libs/generated/graphql";
import Ionicons from "@expo/vector-icons/Ionicons";
import dayjs from "dayjs";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  // ================== STATE ================================
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false); // Added loadingMore state here

  // ================== API ================================
  const { data, loading, refetch, fetchMore } = useGetTransactionsQuery({
    variables: {
      filter: {},
      paging: { limit: 10, offset: 0 },
    },
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true,
  });

  // ================== HANDLERS ================================
  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await refetch();
    } catch (error) {
      console.error("Error refreshing data:", error);
    } finally {
      setRefreshing(false);
    }
  };

  // Add logic to call when the flatlist is scrolled to the end

  const onEndReached = async () => {
    // Check if we have more data to load and not already loading
    if (
      !loadingMore &&
      !loading &&
      data?.getTransactions?.pageInfo?.hasNextPage &&
      data?.getTransactions?.nodes?.length
    ) {
      setLoadingMore(true);
      try {
        const result = await fetchMore({
          variables: {
            filter: {},
            paging: {
              limit: 10,
              offset: data.getTransactions.nodes.length,
            },
          },
        });
      } catch (error) {
        console.error("Error loading more data:", error);
      } finally {
        setLoadingMore(false);
      }
    }
  };

  // ================== COMPONENTS ================================
  const renderFooter = () => {
    if (!loadingMore) return null;
    return (
      <View style={{ padding: 20, alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  };

  // ================== ANIMATION ================================

  const scrollY = useRef(new Animated.Value(0)).current;
  const isLight = useThemeColor({}, "background") === "#fff";

  // Animate background from white → transparent
  const headerBg = scrollY.interpolate({
    inputRange: [0, 250], // scroll distance
    outputRange: isLight
      ? ["rgba(255,255,255,1)", " rgba(255,255,255,0.75)"]
      : ["rgba(21,23,24,1)", " rgba(21,23,24,0.85)"],
    extrapolate: "clamp",
  });

  // Inside HomeScreen component
  const textOpacity = scrollY.interpolate({
    inputRange: [0, 100], // scroll distance
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
          <Animated.View style={[styles.header, { backgroundColor: headerBg }]}>
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
            <TouchableOpacity
              onPress={() => {
                console.log("Add transaction button clicked");
              }}
            >
              <Ionicons
                size={30}
                name="add-circle-sharp"
                color={useThemeColor({}, "opposite")}
              />
            </TouchableOpacity>
          </Animated.View>
          {/* Scrollable Content */}
          {loading && !data?.getTransactions?.nodes?.length ? (
            <Animated.ScrollView
              contentContainerStyle={{ paddingTop: 40 }}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: false }
              )}
              scrollEventThrottle={16}
              showsVerticalScrollIndicator={false}
            >
              <SkeletonCard />
              <View>
                {Array.from({ length: 8 }).map((_, i) => (
                  <SkeletonListItem key={`skeleton-${i}`} />
                ))}
              </View>
            </Animated.ScrollView>
          ) : data?.getTransactions.totalCount &&
            data?.getTransactions.totalCount > 0 ? (
            <Animated.FlatList
              data={data?.getTransactions.nodes}
              keyExtractor={(transaction) => transaction.id.toString()}
              contentContainerStyle={{ paddingTop: 40 }}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: false }
              )}
              scrollEventThrottle={32}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<Card />}
              // Add the component to render when scrolled to end
              ListFooterComponent={renderFooter}
              refreshing={refreshing}
              onRefresh={onRefresh}
              onEndReached={loadingMore ? null : onEndReached}
              // When scrolled to 10% left, call onEndReached
              onEndReachedThreshold={0.1}
              renderItem={({ item: transaction }) => (
                <View
                  key={transaction.id}
                  style={[
                    styles.card,
                    { backgroundColor: isLight ? "#f5f5f5" : "#2a2a2a" },
                  ]}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ flexDirection: "row", gap: 12 }}>
                      <ThemedText type="defaultSemiBold">
                        {getCategoryEmoji(transaction.category)}
                      </ThemedText>
                      <View style={{ gap: 2 }}>
                        <ThemedText type="cardTextSemiBold">
                          {transaction.category &&
                            transaction.category.charAt(0).toUpperCase() +
                              transaction.category.slice(1).toLowerCase()}
                        </ThemedText>
                        <ThemedText type="cardSmallText">
                          {dayjs(transaction.createdAt).format(
                            "MMM D, YYYY h:mm A"
                          )}
                        </ThemedText>
                        <ThemedText type="cardText">
                          {transaction.remarks}
                        </ThemedText>
                      </View>
                    </View>
                    <View>
                      <ThemedText type="cardTextBold">
                        {transaction.type === "EXPENSE" ? "-RM" : "RM"}
                        {transaction.amount.toFixed(2)}
                      </ThemedText>
                    </View>
                  </View>
                </View>
              )}
            />
          ) : (
            <View style={{ paddingTop: 40 }}>
              <Card />
              <View>
                <ThemedText type="default">No transactions found.</ThemedText>
              </View>
            </View>
          )}
        </ThemedView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 40,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    flexDirection: "row",
    zIndex: 10,
  },
  card: {
    marginVertical: 10,
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
});
```

## Checkpoint 7: Deployment

1. Install Eas CLI

```
npm install -g eas-cli

```

2. Login to Expo, type in terminal

```
eas login
```

3. Register app with Expo’s update system.

```
eas update:configure
```

4. Publish (send build to Expo’s CDN)

```
eas update --branch main --message "Initial publish"
```

5. Open Expo Go on your phone, log in with your expo account, project will appear under Projects, your project will appear under Projects, now it can open it anytime

## Reminder

### Development build

Often, we are required to have a development build to use the native modules in IOS or Android

Command below can be used to build development build in your physical device or simulator for local development

Recommended (Not using EAS to wait for queue)

```
npx expo run:android
npx expo run:ios
```

#### Using EAS

1. Install expo-dev-client

```
npx expo install expo-dev-client
```

2. Log in

```
eas login
```

3. Build

```
eas build --platform android --profile development
eas build --platform ios --profile development
```

### Production

If you wanna build a standalone application, without relying on Expo Go, you can use the command below

It will return a eas link for you where you can install the APK in Android

```
eas build --platform android
```

For IOS, you're required to have a paid Apple account to have a standalone application

```
eas build --platform ios
```
