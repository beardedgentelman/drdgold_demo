import { Route, Routes } from 'react-router-dom'
import { Anomalies, Contracts, Dashboard, Reports } from 'pages'

import './../main-user/main.css'

function MainCFO() {
  return (
    <main className='main main__container'>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/contracts' element={<Contracts />} />
        {/* <Route path='/telematics' element={<Telematics />} /> */}
        <Route path='/anomalies' element={<Anomalies />} />
        {/* <Route path='/projections_simulations' element={<ProjectionsSimulations />} /> */}
        <Route path='/reports' element={<Reports />} />
      </Routes>
    </main>
  )
}

export default MainCFO
