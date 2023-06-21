import RoutesMain from "./routes/RoutesMain"

import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { GlobalStyles } from "./styles/global"
import { GlobalReset } from "./styles/reset"
import UserProvider from "./providers/UserContext"

function App() {

  return (
    <div className="App">
      <UserProvider>
      <ToastContainer/>
      <GlobalReset/>
      <GlobalStyles/>
      <RoutesMain/>
      </UserProvider>
    </div>
  )
}

export default App