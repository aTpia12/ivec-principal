import { Link } from 'react-router-dom'

const LogoHeader = () => {
  return (
    <>
        <nav className="bg-gray-100 border-gray-20">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="/" className="flex items-center">
                    <img src="https://veracruzcultura.com/publicaciones/img/bino1.png" width="350" alt="Flowbite Logo" />
                </a>
                <div className="flex items-center">
                    <div className="mr-6 text-sm  text-[#5B3427]"></div>
                    <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"></a>
                </div>
            </div>
        </nav>
        <div class="bg-gray-500">
            <div class="max-w-screen-xl px-4 py-2 mx-auto">
                <button data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                    <span class="sr-only">Menú</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div id="mega-menu-full" class="items-center justify-between text-xs hidden w-full md:flex md:w-auto md:order-1">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-500 md:flex-row md:space-x-6 md:mt-0 md:border-0  md:bg-gray-500border-gray-500">
                        <li>
                            <a href="https://talleres.culturaveracruz.org/" target='_blank' class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FACB67] md:p-0 dark:text-white md:dark:hover:text-[#FACB67] dark:hover:bg-gray-700 dark:hover:text-[#FACB67] md:dark:hover:bg-transparent dark:border-gray-700">| Cursos y Talleres</a>
                        </li>
                        <li>
                            <a href="https://saladeprensa.veracruzcultura.com/" target='_blank' class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FACB67] md:p-0 dark:text-white md:dark:hover:text-[#FACB67] dark:hover:bg-gray-700 dark:hover:text-[#FACB67] md:dark:hover:bg-transparent dark:border-gray-700">| Sala de Prensa</a>
                        </li>
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FACB67] md:p-0 dark:text-white md:dark:hover:text-[#FACB67] dark:hover:bg-gray-700 dark:hover:text-[#FACB67] md:dark:hover:bg-transparent dark:border-gray-700">| Convocatorias </button>
                            <div id="dropdownNavbar" class="z-10 hidden font-normaldivide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-500">
                                <ul class="py-2 text-sm text-white" aria-labelledby="dropdownLargeButton">
                                <li aria-labelledby="dropdownNavbarLink">
                                    <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" class="flex items-center p-1 hover:bg-gray-700 justify-between w-full px-4 text-white text-sm">Abiertas<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button>
                                    <div id="doubleDropdown" class="z-auto absolute text-sm hidden divide-y divide-gray-100 rounded-lg shadow w-[27rem] bg-gray-500">
                                        <ul class="py-2 text-xs text-white" aria-labelledby="doubleDropdownButton">
                                        <li>
                                            <a href="http://www.ivec.gob.mx/bienalceramica2023/docs/convocatoria_11B.pdf" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Convocatoria Bienal de Cerámica Utilitaria Contemporánea 2023</a>
                                        </li>
                                        <li>
                                            <a href="http://www.ivec.gob.mx/convocatorias/2023/Convocatoria_PACMyC_2023.pdf" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Convocatoria PACMyC 2023</a>
                                        </li>
                                        <li>
                                            <a href="https://foncaenlinea.cultura.gob.mx/archivosbases/bases_PVER_2023_5398.pdf" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Convocatoria PECDA 2023</a>
                                        </li>
                                        </ul>
                                    </div>
                                </li>

                                <li aria-labelledby="dropdownNavbarLink">
                                    <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown2" data-dropdown-placement="right-start" type="button" class="flex items-center p-1 hover:bg-gray-700 justify-between w-full px-4 text-white text-sm">Resultados<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button>
                                    <div id="doubleDropdown2" style={{zIndex: 99}} class="text-sm hidden divide-y divide-gray-100 rounded-lg shadow w-[37rem] bg-gray-500">
                                        <ul class="py-2 text-xs text-white" aria-labelledby="doubleDropdownButton">
                                        <li>
                                            <a href="http://www.ivec.gob.mx/convocatorias/resultados/2021/CONVOCATORIA-Contraloria.pdf" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Resultados Convocatoria para la integración del comité de contraloría social MEAEV 2021</a>
                                        </li>
                                        <li>
                                            <a href="http://www.ivec.gob.mx/convocatorias/resultados/2021/Resultados_Bienal_Ceramica_2021.pdf" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Resultados Bienal de Cerámica Utilitaria Contemporánea 2021</a>
                                        </li>
                                        <li>
                                            <a href="http://www.ivec.gob.mx/convocatorias/resultados/2021/Resultados_Convocatoria_Armengol_2021.pdf" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Resultados Concurso de Composición Mario Ruiz Armengol 2021</a>
                                        </li>
                                        <li>
                                            <a href="http://www.ivec.gob.mx/convocatorias/resultados/2021/Resultados_Convocatoria_Huasteca.pdf" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Resultados Estímulos al Desarrollo Cultural de la Huasteca de Veracruz 2021</a>
                                        </li>
                                        <li>
                                            <a href="http://www.ivec.gob.mx/convocatorias/resultados/2021/Resultados_Convocatoria_Istmo.pdf" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Resultados Estímulos al Desarrollo Cultural del Istmo de Veracruz 2021</a>
                                        </li>
                                        <li>
                                            <a href="Http://www.ivec.gob.mx/convocatorias/resultados/2021/Resultados-Reencuentros.pdf" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Resultados Reencuentros Esperados</a>
                                        </li>
                                        <li>
                                            <a href="http://www.ivec.gob.mx/convocatorias/resultados/ResultadosSabanaDesarrollo.pdf" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Resultados Desarrollo Cultural Infantil y Juvenil de Veracruz 2021</a>
                                        </li>
                                        <li>
                                            <a href="http://www.ivec.gob.mx/convocatorias/resultados/2021/ResultadosRaizMexico2021.pdf" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Resultados Raíz México 2021</a>
                                        </li>
                                        <li>
                                            <a href="http://www.ivec.gob.mx/convocatorias/resultados/2021/ResultadosDDECC.pdf" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Resultados Diplomado Digital de Emprendimiento Cultural y Creativo 2021</a>
                                        </li>
                                        <li>
                                            <a href="http://www.ivec.gob.mx/convocatorias/resultados/Resultados_PACMYC_2020.pdf" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Resultados PACMYC 2020</a>
                                        </li>
                                        <li>
                                            <a href="http://www.ivec.gob.mx/convocatorias/resultados/ResultadosPinnatasMAEV.pdf" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Resultados Concurso de Piñatas Navideñas 2020</a>
                                        </li>
                                        <li>
                                            <a href="http://www.ivec.gob.mx/convocatorias/resultados/ResultadosConvCompartirParaVivir.pdf" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Resultados Convocatoria Compartir para Vivir</a>
                                        </li>
                                        <li>
                                            <a href="http://www.ivec.gob.mx/convocatorias/resultados/resultadosMEAEV2020.pdf" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Resultados Muestra Estatal de Artes Escénicas Veracruz</a>
                                        </li>
                                        <li>
                                            <a href="http://www.ivec.gob.mx/convocatorias/resultados/resultadosNVPNov20.pdf" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Resultados #NosVemosPronto para artistas, creadores y emprendedores culturales del Estado de Veracruz</a>
                                        </li>
                                        <li>
                                            <a href="http://www.ivec.gob.mx/convocatorias/resultados/Resultados_THV.pdf" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Resultados Tesoros Humanos Vivos 2020</a>
                                        </li>
                                        <li>
                                            <a href="http://ivec.gob.mx/convocatorias/V_BAV_2020_Finalistas.pdf" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Finalistas de la V Bienal de Arte Veracruz 2020</a>
                                        </li>
                                        <li>
                                            <a href="http://www.ivec.gob.mx/convocatorias/resultados/ConvocatoriasSDR.pdf" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Resultados de Apoyo a la Operación de las Casas de Cultura</a>
                                        </li>
                                        <li>
                                            <a href="TeatroPequennoEnCasa/" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Resultados "Teatro Pequeño en Casa"</a>
                                        </li>
                                        <li>
                                            <a href="http://www.ivec.gob.mx/convocatorias/NVPListaResultadosFinal.pdf" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Resultados #NosVemosPronto</a>
                                        </li>
                                        <li>
                                            <a href="convocatorias/Seminario_Digital_Resultados.pdf" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Seminario Digital de Emprendimiento Cultural y Creativo 2020</a>
                                        </li>
                                        <li>
                                            <a href="convocatorias/ListaPECDA_2020.pdf" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">PECDA</a>
                                        </li>
                                        <li>
                                            <a href="voz.jpg" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Teatro a una sola voz</a>
                                        </li>
                                        <li>
                                            <a href="inde2020.jpg" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Independientes al teatro 2020</a>
                                        </li>
                                        <li>
                                            <a href="proe.jpg" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Apoyo a la producción escénica en Veracruz</a>
                                        </li>
                                        <li>
                                            <a href="Convocatorias_concurso_dibujo.png" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Resultados Concurso de dibujo #QuédateEnCasa</a>
                                        </li>
                                        <li>
                                            <a href="Convocatorias_ilustracion.png" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Resultados Concurso de ilustración #QuédateEnCasa</a>
                                        </li>
                                        <li>
                                            <a href="Convocatorias_cuento_corto.png" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Resultados Concurso de cuento corto #QuédateEnCasa</a>
                                        </li>
                                        <li>
                                            <a href="Convocatorias_decima.png" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Resultados Concurso de décima popular #QuédateEnCasa</a>
                                        </li>
                                        <li>
                                            <a href="Casas de Cultura.jpg" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Apoyo a la Operación de Casas de Cultura</a>
                                        </li>
                                        <li>
                                            <a href="Espacios cuturales.jpeg" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Apoyo a Espacios Culturales Independientes</a>
                                        </li>
                                        <li>
                                            <a href="Instrumentos.jpg" target='_blank' class="block px-4 py-2 hover:bg-gray-600 text-white">Dotación de Instrumentos a Grupos de Música Tradicional</a>
                                        </li>
                                        </ul>
                                    </div>
                                </li>

                                </ul>
                            </div>
                            
                        </li>

                        <li>
                            <a href="https://veracruzcultura.com/publicaciones/" target='_blank' class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FACB67] md:p-0 dark:text-white md:dark:hover:text-[#FACB67] dark:hover:bg-gray-700 dark:hover:text-[#FACB67] md:dark:hover:bg-transparent dark:border-gray-700">| Editorial</a>
                        </li>
                        <li>
                            <a href='#/acervo'>
                                <div class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FACB67] md:p-0 dark:text-white md:dark:hover:text-[#FACB67] dark:hover:bg-gray-700 dark:hover:text-[#FACB67] md:dark:hover:bg-transparent dark:border-gray-700">| Acervo</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://recintosivec.veracruzcultura.com/" target='_blank' class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FACB67] md:p-0 dark:text-white md:dark:hover:text-[#FACB67] dark:hover:bg-gray-700 dark:hover:text-[#FACB67] md:dark:hover:bg-transparent dark:border-gray-700">| Recintos</a>
                        </li>
                        <li>
                            <a href='#/directorio'>
                                <div class="block py-2 pl-3 pr-4 cursor-pointer text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FACB67] md:p-0 dark:text-white md:dark:hover:text-[#FACB67] dark:hover:bg-gray-700 dark:hover:text-[#FACB67] md:dark:hover:bg-transparent dark:border-gray-700">| Quiénes Somos</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://veracruzcultura.com/ivec/Veracruzanos_Universales/" target='_blank' class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FACB67] md:p-0 dark:text-white md:dark:hover:text-[#FACB67] dark:hover:bg-gray-700 dark:hover:text-[#FACB67] md:dark:hover:bg-transparent dark:border-gray-700">| Veracruzanos Universales</a>
                        </li>
                        <li>
                            <a href="http://www.ivec.gob.mx/documentos/PSC2019_2024.pdf" target='_blank' class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FACB67] md:p-0 dark:text-white md:dark:hover:text-[#FACB67] dark:hover:bg-gray-700 dark:hover:text-[#FACB67] md:dark:hover:bg-transparent dark:border-gray-700">| Programa Sectorial de Cultura 2019-2024</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </>
  )
}

export default LogoHeader