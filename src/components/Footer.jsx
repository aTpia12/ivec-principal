import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-gray-500">
        <div class="mx-auto w-full max-w-screen-xl">
        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
                <ul class="text-white dark:text-white text-sm">
                    <li class="mb-2">
                        <a href="https://transparencia.rhivec.com/transparencia.php" target='_blank' class=" hover:underline">Transparencia</a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="hover:underline">Intranet Xalapa</a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="hover:underline">Intranet Veracruz</a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="hover:underline">Intranet Administración</a>
                    </li>
                    <li class="mb-2">
                        <a href="https://transparencia.rhivec.com/aprivacidad.php" target='_blank' class="hover:underline">Aviso de Privacidad</a>
                    </li>
                    <li class="mb-2">
                        <a href="http://www.ivec.gob.mx/avisos_privacidad/FormatoARCO.pdf" target='_blank' class="hover:underline">Formato ARCO</a>
                    </li>
                    <li class="mb-2">
                        <a href="http://fototecaveracruz.com/" target='_blank' class="hover:underline">Fototeca de Veracruz</a>
                    </li>
                    <li class="mb-2">
                        <a href="https://jex.veracruzcultura.com/" target='_blank' class="hover:underline">Jardín de las Esculturas</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul class="text-white dark:text-white text-sm">
                <li class="mb-2">
                        <a href="https://veracruzcultura.com/equidad/" target='_blank' class=" hover:underline">Unidad de Género</a>
                    </li>
                    <li class="mb-2">
                        <a href="https://www.formacionivec.org.mx/" target='_blank' class="hover:underline">Plataforma Digital de Formación IVEC</a>
                    </li>
                    <li class="mb-2">
                        <a href="#" class="hover:underline">Administrador de Sistema</a>
                    </li>
                    <li class="mb-2">
                        <div data-modal-target="cocodi" data-modal-toggle="cocodi" class="hover:underline">COCODI</div>
                    </li>
                    <li class="mb-2">
                        <a href="http://ivec.gob.mx/bienalceramica2021/catalogo/" target='_blank' class="hover:underline">Catálogo de Bienal de Cerámica 2021</a>
                    </li>
                    <li class="mb-2">
                        <a href="http://ivec.gob.mx/catalogos/CatalogoVbienalArteVeracruz2020/" class="hover:underline">Catálogo Bienal 2020</a>
                    </li>
                    <li class="mb-2">
                        <a href="http://ivec.gob.mx/img/recintos/Catalogo%20Cuarta%20Bienal%20de%20Arte%20Veracruz.pdf" class="hover:underline">Catálogo Bienal 2018</a>
                    </li>
                    <li class="mb-2">
                        <a href="http://ivec.gob.mx/ceramistas/" target="_blank" class=" hover:underline">Directorio de Ceramistas</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul class="text-white dark:text-white text-sm">
                    <li class="mb-2 cursor-pointer">
                        <div data-modal-target="ModalGen" data-modal-toggle="ModalGen" class=" hover:underline">Manuales Administrativos</div>
                    </li>
                    <li class="mb-2">
                        <a href="https://transparencia.rhivec.com/progAnual.php" target="_blank" class="hover:underline">Programa de Adquisiciones</a>
                    </li>
                    <li class="mb-2">
                        <a href="http://ivec.gob.mx/Reglamento%20Interior%20del%20ivec.pdf" target="_blank" class="hover:underline">Reglamento Interior IVEC</a>
                    </li>
                    <li class="mb-2">
                        <a href="http://www.ivec.gob.mx/documentos/cod_c.pdf" target="_blank"  class="hover:underline">Código de Conducta</a>
                    </li>
                    <li class="mb-2">
                        <a href="https://ecc.veracruzcultura.com/" target='_blank' class="hover:underline">Empresas Culturales y Creativas</a>
                    </li>
                    <li class="mb-2">
                        <a href="http://ivec.gob.mx/contraloria_social/" target="_blank" class="hover:underline">Contraloría Social</a>
                    </li>
                    <li class="mb-2">
                        <a href="https://veracruzcultura.com/gestor/index.php" target='_blank' class="hover:underline">Gestor de Contenido</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-xs font-normal text-right text-white">
                    <p>Instituto Veracruzano de la Cultura</p>
                    <p>Sede Veracruz, Francisco Canal s/n esquina Zaragoza, Centro Histórico</p>
                    Veracruz, Ver. (229) 931 69 94 - (229) 932 13 31
                </h2>
                <h2 class="mb-6 text-xs font-normal text-right text-white">
                    <p>Sede Xalapa, Xalapeños Ilustres 135</p><p>Centro Histórico</p>
                    Xalapa, Ver. (228) 818 04 12 
                </h2>
            </div>
        </div>
        <div class="px-4 py-6 bg-gray-700 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="#">IVEC</a>. Derechos Reservados.
            </span>
            <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
                <a href="https://www.facebook.com/IVECoficial/" target='_blank' class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                    <span class="sr-only">Facebook page</span>
                </a>
                <a href="https://www.instagram.com/ivecoficial/" target='_blank' class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                    <span class="sr-only">Instagram page</span>
                </a>
                <a href="https://twitter.com/IVEC_Oficial" target='_blank' class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                    <span class="sr-only">Twitter page</span>
                </a>

            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer