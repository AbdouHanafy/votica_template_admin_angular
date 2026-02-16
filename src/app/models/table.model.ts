export type TableColumnType = 'text' | 'email' | 'badge' | 'avatar' | 'currency' | 'date' | 'actions';

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  type?: TableColumnType;
}

export interface TableAction {
  key: string;
  icon: string;
  label: string;
  tone?: 'neutral' | 'danger';
}

export interface TableActionEvent {
  actionKey: string;
  row: Record<string, unknown>;
}
