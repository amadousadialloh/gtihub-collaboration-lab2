const url = "http://localhost:3000/pets";
export const fetchPets = async () => {
  try {
    const getAllPets = await fetch(url);
    const pets = await getAllPets.json();
    return pets;
  } catch (error) {
    console.log(error, "error fetching data");
  }
};
