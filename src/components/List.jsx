import React from 'react'

const List = ({list}) => {
  return (
    <>
        <h2 class="mb-2 text-lg font-semibold text-gray-900 ">Documentos:</h2>
        <ol class="w-full space-y-1 text-blue-700 font-semibold text-sm grid grid-cols-2  list-inside">
            {
                list.map(element => (
                    <li className='hover:cursor-pointer'>
                        <a href={element.file} target='_blank' class="font-semibold ">{ element.name }</a>
                    </li>
                ))
            }

        </ol>
    </>
  )
}

export default List