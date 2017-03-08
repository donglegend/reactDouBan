import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory, browserHistory} from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import routes from "./route";

import "../res/styles/reset.scss";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
	<MuiThemeProvider>
		<Router routes={routes} history={hashHistory} />
	</MuiThemeProvider>,
  document.getElementById('app'));
