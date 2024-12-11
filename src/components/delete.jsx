  // Delete a pet
  const API_URL = "http://localhost:3000/pets";

  const deletePet = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setPets((prevPets) => prevPets.filter((pet) => pet._id !== id));
  };

  export default Delete;