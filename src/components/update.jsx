  // Update a pet
  const API_URL = "http://localhost:3000/pets";

  const updatePet = async (id, updatedData) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    const updatedPet = await response.json();
    setPets((prevPets) =>
      prevPets.map((pet) => (pet._id === id ? updatedPet : pet))
    );
  };

  export default Update;