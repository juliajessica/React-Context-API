import {ThemeContext} from './ThemeContext'; //theme styles

function ThemeTogglerButton() {
  return(
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => ( //receives the theme & toggleTheme function from the context
  return (
        <button
          onClick={toggleTheme}
          style={{backgroundColor: theme.background}}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;
