import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle, defaultTheme } from './styles';

import Routes from './presentation/routes';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
