import { useState, useEffect } from 'react'
import CardAcervo from '../components/acervo/CardAcervo'
import ModalAcervo from '../components/acervo/ModalAcervo'

import { acervo } from '../helpers/dataAcervo'

const Acervo = () => {

    localStorage.removeItem('directorio')

    const [datos, setDatos] = useState(acervo)

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      const isPageLoaded = localStorage.getItem("isPageLoaded");
      if (!isPageLoaded) {
        setLoaded(true)
        localStorage.setItem("isPageLoaded", true);
        window.location.reload();
      }
    }, []);

  return (
    <div className='container mx-auto grid grid-cols-3'>
        {

            datos.map((acer, index) => (
              <>
                <CardAcervo 
                 key={`Acer-${acer.id}`}
                 acer={acer}
                />
                <ModalAcervo 
                  key={`AcerM-${index}`}
                  acer={acer}
                  index={index}
                />
              </>
            ))
        }

    </div>
  )
}

export default Acervo