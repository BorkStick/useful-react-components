import React from "react";

import ComponentCategory from "../components/ComponentCategory/ComponentCategory";

export default function HomePage() {
  return (
    <div>
      <h1>Useful React Components</h1>
      <ComponentCategory category="Nav"/>
    </div>
  );
}
