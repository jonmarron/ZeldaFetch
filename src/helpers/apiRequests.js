export const getAll = async () => {
  const URL = `https://botw-compendium.herokuapp.com/api/v3/compendium/`;

    const response = await fetch(URL);
    const data = await response.json()
    return data.data;

}
export const getByCategory = async (category) => {
  const URL = `https://botw-compendium.herokuapp.com/api/v3/compendium/category/${category}`;

    const response = await fetch(URL);
    const data = await response.json()
    return data.data;

}