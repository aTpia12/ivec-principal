export const getCartelerasDos = async() => {
    const URL = `${import.meta.env.VITE_BACKEND_URL}/api/carteleras?filter[sec]=1`;
    const resp = await fetch(URL);
    const data  = await resp.json();
    const cardos = await data.carteleras

    console.log(cardos)

    return cardos;
  }