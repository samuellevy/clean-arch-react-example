import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle, defaultTheme } from './styles';

import Routes from './presentation/routes';
import { AuthProvider } from './presentation/context/auth/AuthContext';
import { EventsProvider } from './presentation/context/events';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AuthProvider>
        <EventsProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </EventsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
