export const getCarteleras = async() => {
    const URL = `${import.meta.env.VITE_BACKEND_URL}/api/banners`;
    const resp = await fetch(URL);
    const data  = await resp.json();
    const car = await data.banners

    return car;
  }