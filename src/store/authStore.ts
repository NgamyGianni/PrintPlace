import { Session } from "@supabase/supabase-js"
import immer from "immer";
import { create, useStore } from "zustand";

type State = {
    isLoggedIn: boolean
}

type Actions = {
    setLoggedIn: () => void
    setLoggedOut: () => void;
  };

const initialState: State = {
	isLoggedIn: false,
}

const useAuthStore = create<State>()((set) => ({
    ...initialState,
    setLoggedIn: () => set(() => ({
        isLoggedIn: true
    })),
    setLoggedOut: () => set(() => ({
        isLoggedIn: false
    })),

}));
  

  export default useAuthStore;