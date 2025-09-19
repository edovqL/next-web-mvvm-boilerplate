export interface Example {
  id: string;
  name: string;
  value: number;
  createdAt: Date;
}

export interface CreateExampleRequest {
  name: string;
  value: number;
}
