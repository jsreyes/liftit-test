import './index.css';

import createHistory from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// Importando redux
import { Provider } from 'react-redux'
// Importando React router
import { Router } from 'react-router'
import { applyMiddleware, combineReducers, createStore  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import services from './services'
import * as reducers from './thunks';

// Creando el store para pasarle al provider
const store = createStore(combineReducers({
 ...reducers,
 form: formReducer
}), composeWithDevTools(
 applyMiddleware(thunk.withExtraArgument(services))
))

// Creando la const de history que necesita el Router
const history = createHistory();

ReactDOM.render(
 <Provider store={store}>
  <Router history={history}>
   <App history={history} />
  </Router>
 </Provider>

 , document.getElementById('root') as HTMLElement
);
registerServiceWorker();
