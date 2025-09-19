import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { getExamples, createExample } from "@/lib/api/exampleApi";
import { CreateExampleRequest } from "@/features/example/model/example.types";
import { useExampleStore } from "@/lib/store";

export const useExampleViewModel = () => {
  const queryClient = useQueryClient();
  const { examples, setExamples, selectedExample } = useExampleStore();

  const { data, isLoading, error } = useQuery({
    queryKey: ["examples"],
    queryFn: getExamples,
    initialData: examples, // Use store data as initial data
  });

  const createMutation = useMutation({
    mutationFn: (newExample: CreateExampleRequest) => createExample(newExample),
    onSuccess: (newExample) => {
      // Update the cache directly
      queryClient.setQueryData(["examples"], (example: unknown) => [
        ...(Array.isArray(example) ? example : []),
        newExample,
      ]);
      // Also update the store
      setExamples([...examples, newExample]);
    },
  });

  return {
    examples: data || examples,
    isLoading,
    error,
    selectedExample,
    createExample: createMutation.mutate,
    isCreating: createMutation.isPending,
  };
};
