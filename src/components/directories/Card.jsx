import ModalDirectory from "./ModalDirectory"

const Card = ({datos}) => {

    const {img, des, name, id} = datos

  return (
    <>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow mr-5 mb-5">
          <img data-modal-target={`defaultModalD${id}`} data-modal-toggle={`defaultModalD${id}`} class="rounded-t-lg" src={img} alt="" />

          <div class="p-5">
          <p class="mb-3 font-bold text-[#5B3427] text-center">{name}</p>
          <p class="mb-3 font-xs text-[#5B3427] text-center">{des}</p>
          </div>
      </div>

       <ModalDirectory datos={datos}/>
    </>
  )
}

export default Card