import { createRef, memo, useState } from 'react'
import useOnClickOutside from 'helpers/custom-hooks/useOnClickOutside/useOnClickOutside'

import BurgerBar from 'components/burgerBar/BurgerBar'
import UserMenu from 'components/userMenu/UserMenu'

import './burgerMenu.css'

function BurgerMenu() {
  const ref = createRef()
  const [isOpen, setIsOpen] = useState(false)
  const [flag, setFlag] = useState(true)

  useOnClickOutside(ref, () => setIsOpen(false))

  return (
    <>
      {
        <BurgerBar
          className={isOpen ? 'open' : ''}
          onClick={() => {
            if (flag === true) {
              setIsOpen(true)
              setFlag(false)
            } else {
              setIsOpen(false)
              setFlag(true)
            }
          }}
        />
      }
      {isOpen && <UserMenu ref={ref} />}
    </>
  )
}

export default memo(BurgerMenu)
