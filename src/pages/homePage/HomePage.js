import { Link } from 'react-router-dom'

import { Btn } from 'components'

import './home_page.css'
import '../../containers/main-user/main.css'

const HomePage = () => {
  return (
    <main className='main main__container'>
      <Link to='/cfo'>
        <Btn>CFO</Btn>
      </Link>
      <Link to='/user'>
        <Btn>User</Btn>
      </Link>
    </main>
  )
}

export default HomePage
