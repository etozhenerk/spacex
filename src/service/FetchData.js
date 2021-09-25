export default class FetchData {
  getResource = async (url) => {
    const res = await fetch(url);

    if(!res.ok){
        throw new Error(`Произошла ошибка! ${res.status}`);
    }

    return await res.json();
  };
}
