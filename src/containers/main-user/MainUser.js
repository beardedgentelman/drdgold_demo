import { Route, Routes } from 'react-router-dom'
import { Anomalies, Dashboard, Machines, Upload, ViewDocuments } from 'pages'

import './main.css'

function MainUser() {
  return (
    <main className='main main__container'>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/viewDocuments' element={<ViewDocuments />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/anomalies' element={<Anomalies type='user' />} />
        <Route path='/machines' element={<Machines />} />
      </Routes>
    </main>
  )
}

export default MainUser
