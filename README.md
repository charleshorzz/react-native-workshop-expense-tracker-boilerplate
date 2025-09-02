# React Native Expense Tracker Application Workshop

## Pre-requisites

1. You need to have Expo Go installed on your physical device![Expo Go](https://i.postimg.cc/1RYC3Xn6/expo-img.png) 

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
***Log in for Expo go is required for first time use**

## Checkpoint 2: Set up

✨ Tips: use `CTRL + P / Command + P` in Vs Code to find a file quickly

2a. Change custom fonts

- You can download a font from [Google Fonts](https://fonts.google.com/selection)
- Or use the pre-downloaded Saira fonts in assets/fonts

To change the fonts in React Native

In `app/\_layout.tsx`, change the fonts from SpaceMono to Saira

```markdown
  Saira: require("../assets/fonts/Saira-Regular.ttf"),
```

Then, update in `ThemedText.tsx`, make sure every styles included fontFamily. For example,

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

In `Colors.ts`,

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

Open `index.tsx`, remove all the code and paste the code below to start

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

To play with the animation example, open `HelloWave.tsx`

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

To implement animation in HomeScreen, open `index.tsx` and add the animation function

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

2. Set up Apollo client, create a new file called `ApolloClient.ts` at root

```
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://147d60b740bb.ngrok-free.app/graphql" }),
  cache: new InMemoryCache(),
  });

export default client;
```

3. Wrap the application using ApolloProvider in `app/_layout.tsx`

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

1. Create a file called `codegen.yml` at root and paste the config below

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

2. Create a new folder called `libs` at root, under the `libs` folder, create a file called `index.graphql`

3. Open `package.json`, add new command, `generate:graphql` as below

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

4. Inside the `index.graphql` file created just now, write the query, mutation and fragment required

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

6. Notice that under the `libs` folder, `graphql.ts` will be auto-generated

## Checkpoint 6: Integrate GraphQL in home screen

1. Open `index.tsx`, below is a simple example to get transactions

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

2.  I've provive a refined design below to be pasted into `index.tsx to show how data fetched can be passed into frontend

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

`ApolloClient.ts`

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

`Index.tsx`

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
