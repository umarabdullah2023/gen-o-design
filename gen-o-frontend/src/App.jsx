import {BrowserRouter} from 'react-router-dom';
import Routing from './Routing/Routing';
import './common/styles/base.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <BrowserRouter>
          <Routing/>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
