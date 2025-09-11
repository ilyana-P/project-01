import React, { useState } from "react";

export default function SpaceMissionsForm() {
  const [astronautName, setAstronautName] = useState("John Doe");
  const [planet, setPlanet] = useState("planet");
  return (
    <div>
      <h2>Space Mission Form</h2>
      <input
        type="text"
        placeholder="Enter astronaut name"
        value={astronautName}
        onChange={(event) => setAstronautName(event.target.value)}
      />
      <select
        value={planet}
        onChange={(event) => setPlanet(event.target.value)}
      >
        <option value="Mars">Mars</option>
        <option value="Venus">Venus</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option>
      </select>

      {astronautName ? (
        <p>
          Astronaut {astronautName} is headed to {planet}!
        </p>
      ) : (
        <p>Please enter your name to begin your mission.</p>
      )}
    </div>
  );
}
