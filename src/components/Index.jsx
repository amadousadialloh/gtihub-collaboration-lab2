import { fetchPets } from "../services/apiService";

const Index = ({ pets, setPets }) => {
  const handlePet = async () => {
    const petList = await fetchPets();
    setPets(petList);
  };

  return (
    <>
      <h2>Current available pets: {pets.length}</h2>
      <button onClick={handlePet} type="button">
        Show Available Pets
      </button>
    </>
  );
};

export default Index;
