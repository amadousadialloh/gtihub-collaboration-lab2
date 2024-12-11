const PetList = ({ pets, onDeletePet, onUpdatePet }) => {
    return (
      <div>
        <h2>Pet List</h2>
        <ul className="pet-list">
          {pets.map((pet) => (
            <li key={pet._id} className="pet-item">
              <button className="delete-btn" onClick={() => onDeletePet(pet._id)}>
                Delete
              </button>
              <button
                className="update-btn"
                onClick={() => onUpdatePet(pet._id, { name: `${pet.name} (updated)` })}
              >
                Update
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PetList;