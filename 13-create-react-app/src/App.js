import { BrowserRouter } from "react-router-dom";
import Routes from  "./router/Routes";
import Navigation from './component/Navigation'
function App(){
  return(
    <div className="App">
    <BrowserRouter>
    <Navigation/>
    <Routes/>
    </BrowserRouter>
    </div>
  );
}
export default App;