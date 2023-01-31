import { Route, Routes } from 'react-router-dom'
import { Anomalies, Dashboard, HomePage, Machines, Upload, ViewDocuments } from 'pages'

import './main.css'

function Main() {
  return (
    <main className='main main__container'>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/viewDocuments' element={<ViewDocuments />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/anomalies' element={<Anomalies />} />
        <Route path='/machines' element={<Machines />} />
      </Routes>
    </main>
  )
}

export default Main
