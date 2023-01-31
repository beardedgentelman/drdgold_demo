import { Link } from 'react-router-dom'

import { Btn } from 'components'

import './dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard'>
      <Link to={'/upload'}>
        <Btn>Upload scanned time sheet</Btn>
      </Link>
      <Btn onClick={() => window.open('http://frontend-timesheet.s3-website-us-east-1.amazonaws.com/', '_blank')}>
        Submit digital time sheet
      </Btn>
    </div>
  )
}

export default Dashboard
