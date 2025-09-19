import { create } from "zustand";
import { Example } from "@/features/example/model/example.types";

interface ExampleStore {
  examples: Example[];
  selectedExample: Example | null;
  setExamples: (examples: Example[]) => void;
  setSelectedExample: (example: Example | null) => void;
}

export const useExampleStore = create<ExampleStore>((set) => ({
  examples: [],
  selectedExample: null,
  setExamples: (examples) => set({ examples }),
  setSelectedExample: (example) => set({ selectedExample: example }),
}));
