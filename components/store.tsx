import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import generateMessages from "./utils";

interface Data {
  index: number;
  item: string;
}

type Props = {
  bears: number;
  state: object;
  message: string;
  messages: Data[];
  set: any;
};

const useStore = create(
  persist(
    (set) => ({
      bears: 0,
      messages: generateMessages(10),
      addMessage: (message: string) =>
        set((state: Props) => {
          return {
            messages: [...state.messages, message],
          };
        }),
      increasePopulation: () =>
        set((state: Props) => ({ bears: state.bears + 1 })),
      decreasePopulation: () =>
        set((state: Props) => ({ bears: state.bears - 1 })),
      removeAllBears: () => set({ bears: 0 }),
    }),
    { name: "food-store", storage: createJSONStorage(() => AsyncStorage) }
  )
);

export default useStore;
