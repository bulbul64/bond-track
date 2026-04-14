export type Friend = {
  id: number;
  name: string;
  title: string;
  bio: string;
  picture: string;
  email: string;
  days_since_contact: number;
  status: "overdue" | "almost due" | "on-track";
  tags: string[];
  goal: number;
  next_due_date: string;
};

export type Interaction = {
  id: number;
  name: string;
  action: "call" | "text" | "video";
  time: string;
};

export type StateType = {
  history: Interaction[];
};

export type ActionType = {
  type: "ADD_INTERACTION";
  payload: Interaction;
};

export type InteractionContextType = {
  state: StateType;
  addInteraction: (friend: Friend, action: Action) => void;
};

export type Action = "call" | "text" | "video";