import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
import SwitchButton from './Button';
import Header from './Header';
import Main from './Main';

class App extends React.Component {
  state = {
    isDarkMode: false,
  };
  changeMode = () => {
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };
  render() {
    let { isDarkMode } = this.state;
    const data = {
      isDarkMode: this.state.isDarkMode,
      changeMode: this.changeMode,
    };

    return (
      <>
        <ThemeContext.Provider value={data}>
          <div className={`bg ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
            <Header />
            <Main />
            <SwitchButton />
          </div>
        </ThemeContext.Provider>
      </>
    );
  }
}

export default App;
