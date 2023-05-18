import { Outlet, useLocation } from 'react-router-dom'
import LogoHeader from "../components/LogoHeader"
import Footer from '../components/Footer'
import Cocodi from '../components/modals/Cocodi'
import ModalGen from '../components/modals/ModalGen'
import Manauales from '../components/Manauales'

const Header = () => {

  const dir = useLocation()

  console.log(dir.pathname)

  return (
    <>
        <div style={{position: dir.pathname === '/acervo' ? '' : 'relative', zIndex: 99}} className='w-full'>
          <LogoHeader />
        </div>

        <div className='py-10'>
            <Outlet />
        </div>
        <Footer />
        <Cocodi />
        <ModalGen title="Manuales Administrativos">
          <Manauales />
        </ModalGen>
    </>
  )
}

export default Header