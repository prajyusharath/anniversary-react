import React, { useState } from "react";
import AnniversarySite from "./AnniversarySite";
import LoginPage from "./LoginPage";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <AnniversarySite />
  ) : (
    <LoginPage setIsLoggedIn={setIsLoggedIn} />
  );
}
