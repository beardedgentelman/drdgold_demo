import { Route, Routes } from 'react-router-dom'
import { CFOContainer, UserContainer } from 'containers'
import { HomePage } from 'pages'

import './styles/main.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/user/*' element={<UserContainer />} />
        <Route path='/cfo/*' element={<CFOContainer />} />
      </Routes>
    </div>
  )
}

export default App
