import { create } from 'zustand';

interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
}

interface ChatState {
  messages: Message[];
  activeChat: string | null;
  addMessage: (message: Message) => void;
  setActiveChat: (userId: string | null) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  activeChat: null,
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  setActiveChat: (userId) => set({ activeChat: userId }),
}));