

const CardAcervo = ({acer}) => {
    const { img } = acer

  return (
    <>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                <img data-modal-target={`hola${acer.id}`} data-modal-toggle={`hola${acer.id}`} class="rounded-t-lg" src={img} alt="" />
            <div class="p-5">
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                
                </p>

            </div>
        </div>

    </>
  )
}

export default CardAcervo