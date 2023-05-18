import {useState, useEffect} from 'react'
import MenuLeft from "../components/directories/MenuLeft"
import DireccionGen from "../components/directories/DireccionGen"

const Directorio = () => {

    localStorage.removeItem('isPageLoaded')

    const [indice, setIndice] = useState(1)

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      const isPageLoaded = localStorage.getItem("directorio");
      if (!isPageLoaded) {
        setLoaded(true)
        localStorage.setItem("directorio", true);
        window.location.reload();
      }
    }, []);

  return (
    <>
        <div className='flex container mx-auto'>
            <div className='w-1/5 mr-10'>
                <MenuLeft 
                    setIndice={setIndice}
                />
            </div>
            <div className='w-4/5 '> 
                
                <DireccionGen 
                    indice={indice}
                />
            </div>
        </div>
    </>
  )
}

export default Directorio