import { ThemeProvider } from '@material-ui/core/styles';
import GraphqlProvider from 'components/GraphqlProvider';

import Routes from './Routes';
import theme from './theme';

const App = () => (
  <GraphqlProvider>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </GraphqlProvider>
);

export default App;
