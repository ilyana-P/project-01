import React, { useState } from "react";
import s from "./SpaceMissionsForm.module.css";

export default function SpaceMissionsForm() {
  const [astronautName, setAstronautName] = useState("John Doe");
  const [planet, setPlanet] = useState("Mars");
  return (
    <div className={s.container}>
      <h2 className={s.title}>Space Mission Form</h2>
      <input
      className={s.input}
        type="text"
        placeholder="Enter astronaut name"
        value={astronautName}
        onChange={(event) => setAstronautName(event.target.value)}
      />
      <select
      className={s.select}
        value={planet}
        onChange={(event) => setPlanet(event.target.value)}
      >
        <option value="Mars">Mars</option>
        <option value="Venus">Venus</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option>
      </select>

      {astronautName ? (
        <p className={s.message}>
          Astronaut {astronautName} is headed to {planet}!
        </p>
      ) : (
        <p>Please enter your name to begin your mission.</p>
      )}
    </div>
  );
}
