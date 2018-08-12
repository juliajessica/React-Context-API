import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import Components from './Components';
//import { createStore } from 'redux';
//import { Provider } from 'react-redux';

//const store = createStore(postListReducer);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        //<Provider>
          <Components/>
        //</Provider>
      </HashRouter>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

// render(App);

/* eslint-disable */
if (module.hot) {
  module.hot.accept(require('./Components/App'), () => {
    render(App);
  });
}
