import React from "react";
import { useNavigation } from "./react-router/useNavigation";

export function Page() {
  const { to } = useNavigation();

  return (
    <section className="App-content">
      <div>Page</div>
      <button @to="/about" historyReplace>
        Go to About with history.replace
      </button>
    </section>
  );
}
