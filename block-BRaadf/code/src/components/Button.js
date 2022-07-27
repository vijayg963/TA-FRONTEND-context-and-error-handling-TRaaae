import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function SwitchButton() {
  let { isDarkMode, changeMode } = useContext(ThemeContext);
  return (
    <button
      className={`btn ${isDarkMode ? 'btn-dark' : 'btn-light'}`}
      onClick={changeMode}
    >
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}
