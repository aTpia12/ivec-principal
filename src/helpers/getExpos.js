export const getExpos = async() => {
    const URL = `${import.meta.env.VITE_BACKEND_URL}/api/expos`;
    const resp = await fetch(URL);
    const data  = await resp.json();
    const expos = await data.expos

    return expos;
  }