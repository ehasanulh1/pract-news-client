import { Toast } from 'react-bootstrap';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes/Routes';


function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <Toast></Toast>
    </div>
  );
}

export default App;