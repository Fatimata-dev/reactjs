import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux';
import Routes from  "./router/Routes";
import Navigation from './component/Navigation';
import store from './store'
function App() {
  return (
    <div className="App">
        {/* Le store est maintenant accessible partout dans l'application */}
        <Provider store={store}>
          <BrowserRouter>
              <Navigation/>
              <Routes/>
          </BrowserRouter>
        </Provider>
    </div>
  );
}
export default App;