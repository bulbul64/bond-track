export type Friend = {
  id: number;
  name: string;
  title: string;
  bio: string;
  picture: string;
  email: string;
  days_since_contact: number;
  status: 'overdue' | 'almost due' | 'on-track';
  tags: string[];
  goal: number;
  next_due_date: string;
};