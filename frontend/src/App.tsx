import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header"
import Home from "./screens/Home"

const App = () => (
  <div>
    <ToastContainer />
    <Header />
    <Home />
  </div>
)

export default App
