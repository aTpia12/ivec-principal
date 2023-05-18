import React from 'react'

const MenuLeft = ({setIndice}) => {
  return (
    <>
        <dl class="max-w-md text-gray-900 divide-y divide-gray-70">
            <div class="flex flex-col pb-3">
                <dd class="text-sm font-normal cursor-pointer hover:text-[#5B3427]" onClick={() => setIndice(1)}>Dirección General</dd>
            </div>
            <div class="flex flex-col py-3">
                <dd class="text-sm font-normal cursor-pointer hover:text-[#5B3427]" onClick={() => setIndice(2)}>Subdirección de Artes y Patrimonio</dd>
            </div>
            <div class="flex flex-col pt-3">
                <dd class="text-sm font-normal cursor-pointer hover:text-[#5B3427]" onClick={() => setIndice(3)}>Subdirección de Desarrollo Cultural Regional</dd>
            </div>
            <div class="flex flex-col pt-3">
                <dd class="text-sm font-normal cursor-pointer hover:text-[#5B3427]" onClick={() => setIndice(4)}>Subdirección de Formación y Desarrollo Artístico</dd>
            </div>
            <div class="flex flex-col pt-3">
                <dd class="text-sm font-normal cursor-pointer hover:text-[#5B3427]" onClick={() => setIndice(5)}>Subdirección de Planeación y Vinculación</dd>
            </div>
            <div class="flex flex-col pt-3">
                <dd class="text-sm font-normal cursor-pointer hover:text-[#5B3427]" onClick={() => setIndice(6)}>Subdirección de Administración</dd>
            </div>
            <div class="flex flex-col pt-3">
                <dd class="text-sm font-normal cursor-pointer hover:text-[#5B3427]" onClick={() => setIndice(7)}>Jefaturas de Recintos</dd>
            </div>
        </dl>
    </>
  )
}

export default MenuLeft