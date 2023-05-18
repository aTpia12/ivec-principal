import React from 'react'
import Gallery from '../Gallery'
import List from '../List'

const Cocodi = () => {

    const dataImages = [
        'images/cocodi/IMG_0846.JPG',
        'images/cocodi/IMG_0847.JPG',
        'images/cocodi/IMG_0848.JPG',
        'images/cocodi/IMG_0849.JPG',
        'images/cocodi/IMG_0850.JPG',
        'images/cocodi/IMG_0851.JPG',
        'images/cocodi/IMG_0852.JPG',
        'images/cocodi/IMG_0853.JPG',
        'images/cocodi/IMG_0854.JPG',
        'images/cocodi/IMG_0855.JPG',
    ]

    const listLinks = [
        {name: '1. Primera Sesión Ordinaria del COCODI 2020.pdf',
         file: 'http://ivec.gob.mx/img/cocodi/1-. Primera Sesion Ordinaria del COCODI 2020.pdf'},
        {name: '8. Primera Extraordinaria del COCODI 2021.pdf',
         file: 'http://ivec.gob.mx/img/cocodi/2-. Segunda Sesion Ordinaria del COCODI 2020.pdf'},
        {name: '2. Segunda Sesión Ordinaria del COCODI 2020.pdf',
         file: 'http://ivec.gob.mx/img/cocodi/3 -.Primera Sesion Extraordinaria del COCODI 2020.pdf'},
        {name: '9. Segunda Sesión Extraordinaria del COCODI 2021',
         file: 'http://ivec.gob.mx/img/cocodi/4-. Primera Extraordinaria del COCODI 2021.pdf'},
        {name: '3. Primera Sesión Extraordinaria del COCODI 2020',
         file: 'http://ivec.gob.mx/img/cocodi/5-. Primera Ordinaria del COCODI 2021.pdf'},
        {name: '10. Primera Ordinaria del COCODI 2022.pdf',
         file: 'http://ivec.gob.mx/img/cocodi/6-. Segunda Sesion Ordinaria del COCODI 2021.pdf'},
        {name: '4. Primera Ordinaria del COCODI 2021.pdf',
         file: 'http://ivec.gob.mx/img/cocodi/7-. Segunda Sesion Extraordinaria del COCODI 2021.pdf'},
        {name: '11. Segunda Sesión Ordinaria del COCODI 2022.pdf',
         file: 'http://ivec.gob.mx/img/cocodi/8-. Tercera Sesion Ordinaria del COCODI 2021.pdf'},
        {name: '5. Segunda Sesión Ordinaria del COCODI 2021',
         file: 'http://ivec.gob.mx/img/cocodi/9-. Cuarta Sesion Ordinaria del COCODI 2021.pdf'},
        {name: '12. Tercera Sesión Ordinaria del COCODI 2022.pdf',
         file: 'http://ivec.gob.mx/img/cocodi/10-.Primera Ordinaria del COCODI 2022.pdf'},
        {name: '6. Tercera Sesión Ordinaria del COCODI 2021.pdf',
         file: 'http://ivec.gob.mx/img/cocodi/11-.Segunda Sesion Ordinaria del COCODI 2022.pdf'},
        {name: '13. Cuarta Sesión Ordinaria del COCODI 2022.pdf',
         file: 'http://ivec.gob.mx/img/cocodi/12-.Tercera Sesion Ordinaria del COCODI 2022.pdf'},
        {name: '7. Cuarta Sesión Ordinaria del COCODI 2021.pdf',
         file: 'http://ivec.gob.mx/img/cocodi/13-.Cuarta Sesion Ordinaria del COCODI 2022.pdf'},
    ]

  return (
    <>
        <div id="cocodi" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div class="relative w-full max-w-5xl max-h-full">

              <div class="relative bg-gray-100 rounded-lg shadow">

                  <div class="flex items-start justify-between p-4 border-b rounded-t border-gray-600">

                      <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="cocodi">
                          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          <span class="sr-only">Close modal</span>
                      </button>
                  </div>

                  <div class="p-6 space-y-6">
                      <Gallery 
                        data={dataImages}
                      />

                      <List 
                        list={listLinks}
                      />
                  </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default Cocodi