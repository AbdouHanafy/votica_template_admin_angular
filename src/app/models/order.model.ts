export type OrderStatus = 'completed' | 'processing' | 'cancelled';

export interface Order {
  id: string;
  customer: string;
  amount: number;
  status: OrderStatus;
  date: string;
}
