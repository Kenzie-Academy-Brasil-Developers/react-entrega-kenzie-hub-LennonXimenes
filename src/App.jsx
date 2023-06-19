import RoutesMain from "./routes/RoutesMain"

import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { GlobalStyles } from "./styles/global"
import { GlobalReset } from "./styles/reset"

function App() {

  return (
    <div className="App">
      <ToastContainer/>
      <GlobalReset/>
      <GlobalStyles/>
      <RoutesMain/>
    </div>
  )
}

export default App