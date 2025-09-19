import { useState } from "react";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

import { Example } from "../model/example.types";
import { useExampleViewModel } from "../viewmodel/ExampleViewModel";

export const ExampleView = () => {
  const { examples, isLoading, error, createExample, isCreating } =
    useExampleViewModel();

  const [newExample, setNewExample] = useState({ name: "", value: 0 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createExample(newExample);
    setNewExample({ name: "", value: 0 });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Examples</h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Name"
            value={newExample.name}
            onChange={(e) =>
              setNewExample({ ...newExample, name: e.target.value })
            }
          />
          <Input
            type="number"
            placeholder="Value"
            value={newExample.value}
            onChange={(e) =>
              setNewExample({ ...newExample, value: Number(e.target.value) })
            }
          />
          <Button type="submit" disabled={isCreating}>
            {isCreating ? "Creating..." : "Add Example"}
          </Button>
        </div>
      </form>

      <ul className="space-y-2">
        {examples.map((example: Example) => (
          <li key={example.id} className="border p-3 rounded">
            <div className="font-semibold">{example.name}</div>
            <div>Value: {example.value}</div>
            <div className="text-sm text-gray-500">
              Created: {new Date(example.createdAt).toLocaleDateString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
