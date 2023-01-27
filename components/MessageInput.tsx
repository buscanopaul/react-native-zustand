import React, { useState } from "react";
import { TextInput, View } from "react-native";
import useStore from "./store";

type Props = {};

const MessageInput = (props: Props) => {
  const [message, setMessage] = useState("");
  const addMessage = useStore((state) => state.addMessage);

  const handleOnChangeText = (text: any) => {
    setMessage(text);
  };

  return (
    <View className="bg-blue-50 py-10 px-5">
      <TextInput
        onChangeText={(text) => handleOnChangeText(text)}
        value={message}
        onSubmitEditing={() => {
          addMessage(message);
          setMessage("");
        }}
        placeholder="enter...."
      />
    </View>
  );
};

export default MessageInput;
