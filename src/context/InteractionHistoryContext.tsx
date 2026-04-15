'use client';

import { Action, ActionType, Friend, InteractionContextType, StateType } from '@/types/friend';
import { createContext, useReducer } from 'react';
const interactionHistoryContext = createContext<InteractionContextType | null>(null);

const initialState: StateType = {
  history: [],
};

const interactionHistoryReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'ADD_INTERACTION':
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    default:
      return state;
  }
};

const InteractionHistoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(interactionHistoryReducer, initialState);

  console.log(state);

  const addInteraction = (friend: Friend, action: Action) => {
    dispatch({
      type: 'ADD_INTERACTION',
      payload: {
        name: friend.name,
        id: friend.id,
        action,
        time: new Date().toISOString(),
      },
    });
  };

  return (
    <interactionHistoryContext.Provider value={{state, addInteraction }}>
      {children}
    </interactionHistoryContext.Provider>
  );
};

export { interactionHistoryContext, InteractionHistoryProvider };
