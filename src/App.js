import './App.css';
import {useRoutes} from "react-router-dom";
import {ROUTE} from "./route";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

function App() {
    const routes = useRoutes(ROUTE);
  return (
      <div>
          {routes}
          <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
          />
      </div>

  );
}

export default App;
