import {BrowserRouter} from 'react-router-dom';
import Routing from './Routing/Routing';
import './common/styles/base.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <BrowserRouter>
          <Routing/>
          <ToastContainer
            position='top-right'
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover
            theme='colored'
          />
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
