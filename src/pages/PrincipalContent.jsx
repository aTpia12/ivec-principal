import React from 'react'

import Carteleras from '../components/Carteleras'
import CarteleraDos from '../components/CarteleraDos'
import CartelerasRegionales from '../components/CartelerasRegionales'
import GaleriaVirtual from '../components/GaleriaVirtual'
import FacebookTime from '../components/FacebookTime'
import Twitter from '../components/Twitter'

const PrincipalContent = () => {

  localStorage.clear()

  return (
    <div className='flex w-full'>
        <div className='w-3/4'>
            <Carteleras />
            <CarteleraDos />
            <CartelerasRegionales />
            <GaleriaVirtual />
        </div>
        <div className='w-1/4'>
            <FacebookTime />
            <Twitter />
        </div>
    </div>
  )
}

export default PrincipalContent