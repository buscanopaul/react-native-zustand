import React from "react";
import { Text, View } from "react-native";

interface Data {
  index: number;
  item: string;
}

type Props = {
  item: Data;
};

const MessageItem = ({ item }: Props) => {
  return (
    <View className="h-20 bg-red-500 mb-10">
      <Text className="">{item.item}</Text>
    </View>
  );
};

export default MessageItem;
