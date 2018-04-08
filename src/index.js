import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333433',
    },
    secondary: {
      main: '#F25F5C',
    },
  },
});

ReactDOM.render(
	<BrowserRouter>
	<MuiThemeProvider theme={theme}>
			<App />
	</MuiThemeProvider>
	</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
