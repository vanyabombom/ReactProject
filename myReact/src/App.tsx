import './App.css'
import { useLenis } from './hooks/useLenis'
import { AppRouter } from './routers/AppRouter'

function App() {
  useLenis()
  return <AppRouter />
}

export default App