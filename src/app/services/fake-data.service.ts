import { Injectable } from '@angular/core';
import {
  DashboardStat,
  NotificationItem,
  PerformanceMetric,
  RecentActivity,
  TrafficSource
} from '../models/dashboard.model';
import { Order } from '../models/order.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {
  readonly dashboardStats: DashboardStat[] = [
    { label: 'Revenue', value: '$124,580', change: '+14.2%', trend: 'up', icon: 'payments' },
    { label: 'Total Users', value: '8,491', change: '+9.6%', trend: 'up', icon: 'groups' },
    { label: 'Orders', value: '1,274', change: '+5.1%', trend: 'up', icon: 'inventory_2' },
    { label: 'Growth', value: '22.8%', change: '+3.4%', trend: 'up', icon: 'trending_up' }
  ];

  readonly users: User[] = [
    { id: 1, name: 'John Smith', email: 'john@example.com', role: 'Admin', status: 'active', avatar: 'https://i.pravatar.cc/80?img=12', joinDate: '2025-12-01' },
    { id: 2, name: 'Emma Johnson', email: 'emma@example.com', role: 'Manager', status: 'active', avatar: 'https://i.pravatar.cc/80?img=5', joinDate: '2025-11-20' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', role: 'Support', status: 'inactive', avatar: 'https://i.pravatar.cc/80?img=32', joinDate: '2025-11-15' },
    { id: 4, name: 'Sophia Taylor', email: 'sophia@example.com', role: 'Viewer', status: 'inactive', avatar: 'https://i.pravatar.cc/80?img=47', joinDate: '2025-10-29' },
    { id: 5, name: 'Liam Wilson', email: 'liam@example.com', role: 'Manager', status: 'active', avatar: 'https://i.pravatar.cc/80?img=68', joinDate: '2025-10-11' },
    { id: 6, name: 'Olivia Martinez', email: 'olivia@example.com', role: 'Support', status: 'active', avatar: 'https://i.pravatar.cc/80?img=44', joinDate: '2025-09-30' },
    { id: 7, name: 'Noah Davis', email: 'noah@example.com', role: 'Viewer', status: 'active', avatar: 'https://i.pravatar.cc/80?img=13', joinDate: '2025-09-20' },
    { id: 8, name: 'Ava Thompson', email: 'ava@example.com', role: 'Manager', status: 'active', avatar: 'https://i.pravatar.cc/80?img=9', joinDate: '2025-09-09' },
    { id: 9, name: 'James Garcia', email: 'james@example.com', role: 'Support', status: 'active', avatar: 'https://i.pravatar.cc/80?img=19', joinDate: '2025-08-24' },
    { id: 10, name: 'Isabella Lopez', email: 'isabella@example.com', role: 'Viewer', status: 'active', avatar: 'https://i.pravatar.cc/80?img=23', joinDate: '2025-08-12' },
    { id: 11, name: 'William Anderson', email: 'william@example.com', role: 'Support', status: 'inactive', avatar: 'https://i.pravatar.cc/80?img=40', joinDate: '2025-07-28' },
    { id: 12, name: 'Mia Harris', email: 'mia@example.com', role: 'Manager', status: 'active', avatar: 'https://i.pravatar.cc/80?img=49', joinDate: '2025-07-18' }
  ];

  readonly orders: Order[] = [
    { id: 'ORD-10245', customer: 'John Smith', amount: 1240, status: 'completed', date: '2026-02-11' },
    { id: 'ORD-10246', customer: 'Emma Johnson', amount: 890, status: 'processing', date: '2026-02-10' },
    { id: 'ORD-10247', customer: 'Michael Brown', amount: 1540, status: 'completed', date: '2026-02-09' },
    { id: 'ORD-10248', customer: 'Sophia Taylor', amount: 230, status: 'cancelled', date: '2026-02-08' },
    { id: 'ORD-10249', customer: 'Liam Wilson', amount: 670, status: 'processing', date: '2026-02-08' },
    { id: 'ORD-10250', customer: 'Olivia Martinez', amount: 2050, status: 'completed', date: '2026-02-07' }
  ];

  readonly notifications: NotificationItem[] = [
    { id: 1, title: 'New enterprise signup', detail: 'Acme Inc started a 14-day trial.', time: '2m ago', unread: true },
    { id: 2, title: 'Server upgrade completed', detail: 'EU-West cluster migration finished.', time: '19m ago', unread: true },
    { id: 3, title: 'Refund issued', detail: 'Order ORD-10248 was refunded.', time: '1h ago', unread: false },
    { id: 4, title: 'Monthly report ready', detail: 'January analytics report is available.', time: '3h ago', unread: false }
  ];

  readonly recentActivity: RecentActivity[] = [
    { id: 1, title: 'Payment captured', detail: 'Order ORD-10250 successfully captured for $2,050.', time: '4 minutes ago', icon: 'credit_score' },
    { id: 2, title: 'New user onboarded', detail: 'Mia Harris completed account activation.', time: '17 minutes ago', icon: 'person_add' },
    { id: 3, title: 'Campaign launched', detail: 'Spring conversion campaign went live.', time: '46 minutes ago', icon: 'ads_click' },
    { id: 4, title: 'Support resolved', detail: 'Ticket #4392 was closed by Emma Johnson.', time: '1 hour ago', icon: 'verified' }
  ];

  readonly revenueSeries = [11200, 12600, 11890, 13910, 14520, 16240, 17890, 18420, 19610, 20590, 22400, 23980];
  readonly usersSeries = [320, 410, 380, 470, 520, 560, 610];
  readonly trafficSources: TrafficSource[] = [
    { label: 'Organic Search', value: 44 },
    { label: 'Paid Ads', value: 26 },
    { label: 'Social', value: 18 },
    { label: 'Direct', value: 12 }
  ];

  readonly analyticsAreaSeries = [
    { name: 'Sessions', data: [1240, 1410, 1580, 1490, 1710, 1890, 2070, 2140, 2280, 2370, 2490, 2650] },
    { name: 'Conversions', data: [360, 410, 460, 430, 520, 560, 620, 650, 710, 760, 820, 910] }
  ];

  readonly performanceMetrics: PerformanceMetric[] = [
    { label: 'Conversion Rate', value: '6.8%', progress: 68 },
    { label: 'Lead Quality', value: '81%', progress: 81 },
    { label: 'Retention Score', value: '74%', progress: 74 },
    { label: 'NPS Growth', value: '58%', progress: 58 }
  ];

  readonly kpiWidgets = [
    { label: 'Avg Session Duration', value: '4m 28s', delta: '+7.1%' },
    { label: 'Bounce Rate', value: '32.4%', delta: '-3.2%' },
    { label: 'CAC', value: '$74.20', delta: '-8.5%' },
    { label: 'LTV', value: '$1,920', delta: '+5.8%' }
  ];

  readonly monthlyComparison = [
    { month: 'Jan', current: 9200, previous: 7800 },
    { month: 'Feb', current: 9700, previous: 8100 },
    { month: 'Mar', current: 10100, previous: 8400 },
    { month: 'Apr', current: 10950, previous: 8820 },
    { month: 'May', current: 11500, previous: 9030 },
    { month: 'Jun', current: 12200, previous: 9340 }
  ];
}
