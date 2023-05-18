import { useState, useEffect } from 'react'
import { getCartelerasDos } from '../helpers/getCartelerasDos' 

const CarteleraDos = () => {

    const [cartes, setCartes] = useState([])

    useEffect(() => {

        const dat = async () => {
            const dt = await getCartelerasDos()
                setCartes(dt)
        }
        dat()
    }, [])
    if(cartes?.length === 0) return 'Cargando'

  return (
    <div className='text-center uppercase text-lg text-[#5B3427]'>
    Carteleras
    {
       
       cartes?.length > 0 ? 
       
       <div id="gallery" class="relative w-full" data-carousel="slide">

       <div class="relative h-screen overflow-hidden rounded-lg">

        {
        cartes.map(ele => (
            <div class="hidden duration-1000 ease-in-out" data-carousel-item key={ele.id+'CarDos'}>
                <img src={`https://veracruzcultura.com/gestor/${ele.archivo}`} width="90%" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
            </div>
        ))
        }

       </div>

       <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
           <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
               <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
               <span class="sr-only">Previous</span>
           </span>
       </button>
       <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
           <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
               <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
               <span class="sr-only">Next</span>
           </span>
       </button>
   </div>
       : 'No'
    }
</div>
  )
}

export default CarteleraDos