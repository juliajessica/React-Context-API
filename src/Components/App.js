import {ThemeContext, themes} from './ThemeContext';
import ThemedButton from './ThemedButton';

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({ //binding the slice of state to this
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    this.state = { //slices of state
      theme: themes.light, //default
      toggleTheme: this.toggleTheme,

    };


  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <Page>
        <ThemeContext.Provider value={this.state}>
          <Toolbar changeTheme={this.toggleTheme} /> //this contains the theme button
        </ThemeContext.Provider>
        <Section>
          <ThemedButton />
        </Section>
      </Page>
    );
  }
}

//ReactDOM.render(<App />, document.root);

export default App;
