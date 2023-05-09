import { useGlobalState, setGlobalState } from "./useAuth";

export default function useAuth() {
  const users = useGlobalState("currentUser");
  const currentUser = users[0];
  const persist = async (set) => {
    await setGlobalState("currentUser", set);
    await localStorage.setItem("token", JSON.stringify(set));
  };
  const signOut = async () => {
    await localStorage.removeItem("token");
    await setGlobalState("currentUser", "");
  };
  return { currentUser, signOut, persist };
}