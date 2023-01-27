import { StatusBar } from "expo-status-bar";
import { useEffect, useRef } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MessageInput from "./components/MessageInput";
import MessageItem from "./components/MessageItem";
import useStore from "./components/store";

export default function App() {
  const bears = useStore((state: any) => state.bears);
  const increasePopulation = useStore((state: any) => state.increasePopulation);
  const decreasePopulation = useStore((state: any) => state.decreasePopulation);
  const messages = useStore((state: any) => state.messages);
  const flatListRef = useRef<FlatList>(null);

  const handleIncrease = () => {
    increasePopulation();
  };

  const handleDecrease = () => {
    if (bears > 0) {
      decreasePopulation();
    }
  };

  const handleLoadMoreMessages = () => {
    console.log("end");
  };

  const handleScrollToEnd = () => {
    flatListRef.current?.scrollToEnd();
  };

  useEffect(() => {
    flatListRef.current?.scrollToEnd();
  }, [messages]);

  return (
    <SafeAreaView className="flex-1 ">
      <View className="flex-1 px-10">
        <Text>Open up App.tsx to start working on your app!</Text>
        <Text>{bears}</Text>
        <Pressable onPress={handleIncrease}>
          <Text>increase population</Text>
        </Pressable>
        <Pressable onPress={handleDecrease}>
          <Text>decrease population</Text>
        </Pressable>
        <Pressable onPress={handleScrollToEnd}>
          <Text>Scroll to end</Text>
        </Pressable>
        <StatusBar style="auto" />
        <FlatList
          ref={flatListRef}
          onEndReached={handleLoadMoreMessages}
          onEndReachedThreshold={0.5}
          data={messages}
          renderItem={(item) => <MessageItem item={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
        <MessageInput />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
