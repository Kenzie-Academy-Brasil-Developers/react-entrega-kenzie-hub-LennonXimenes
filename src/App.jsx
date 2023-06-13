import RoutesMain from "./routes/RoutesMain"
import { GlobalStyles } from "./styles/global"
import { GlobalReset } from "./styles/reset"

function App() {

  return (
    <div className="App">
      <GlobalReset/>
      <GlobalStyles/>
      <RoutesMain/>
    </div>
  )
}

export default App