// Switch.js

import React, { useState } from 'react';

function Switch({ toggleTheme }) {
  const [isToggled, setIsToggled] = useState(false);

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <label className="form-switch">
      <input
        type="checkbox"
        checked={isToggled}
        onChange={toggleSwitch}
        className="form-check-input"
      />
      <span className="form-check-label">{isToggled ? 'Light Theme' : 'Dark Theme'}</span>
    </label>
  );
}

export default Switch;
