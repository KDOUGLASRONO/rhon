import { createGlobalState } from "react-hooks-global-state";

const session = localStorage.getItem("token")
const user = JSON.parse(session)

const { setGlobalState, useGlobalState } = createGlobalState({
  currentUser: user ? user : "",
});

export { setGlobalState, useGlobalState };