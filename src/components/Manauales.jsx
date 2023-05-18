
const data = [
    { 
        link: 'http://ivec.gob.mx/documentos/ManualOrganizacionSubcomiteAdquisicionesIVEC2022.pdf',
        title: 'Manual Subcomite Adquisiciones 2022'
    },
    { 
        link: 'http://ivec.gob.mx/Manual_General_de_Organizacion_del_IVEC.pdf',
        title: 'Manual General de Organización'
    }
]

const Manauales = () => {
  return (
    <>
    <h2 class="mb-2 text-lg font-semibold text-gray-900">Documentos:</h2>
    <ul class="max-w-md space-y-1 text-gray-500 list-disc list-insid">
        {
            data.map(dato => (
                <li>
                    <a href={dato.link} target="_blank">{dato.title}</a>
                </li>
            ))
        }
    </ul>
    </>
  )
}

export default Manauales