import React from "react";

import { useNavigation } from "./react-router/useNavigation";

export function Header() {
  const { href } = useNavigation();

  return (
    <header className="App-header">
      <a @href="/">Home</a>
      <a @href="/page">Page</a>
      <a @href="/about">About</a>
      <a @href="/contacts">Contacts</a>
    </header>
  );
}
