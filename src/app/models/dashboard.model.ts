export interface DashboardStat {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
}

export interface TrafficSource {
  label: string;
  value: number;
}

export interface RecentActivity {
  id: number;
  title: string;
  detail: string;
  time: string;
  icon: string;
}

export interface NotificationItem {
  id: number;
  title: string;
  detail: string;
  time: string;
  unread: boolean;
}

export interface PerformanceMetric {
  label: string;
  value: string;
  progress: number;
}
