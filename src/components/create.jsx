//imports

import {useState} from 'react'

 const Pets = {
      name: "",
      age: '',
      breed: "",
    }

const AddPet = () => {
    // // define states
    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');
    // const [breed, setBreed] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState('')
    const [pet, setPet] = useState(Pets)
    

   
  
    // handle change from input
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setPet({...Pets, [name]: value})
      // if (name === 'name') {
      //   setName(value);
      // } else if (name === 'age') {
      //   setAge(value);
      // } else if (name === 'breed') {
      //   setBreed(value);
      // }
    };
    
    

    
    


    // submit form data
    const handleSubmit = async (e) => {
      e.preventDefault();
        const response = await fetch('http://localhost:3000/pets', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(Pets)
        }); 
        const data = await response.json();
        console.log(data) 
      
      
        
        // setData(data)
        // console.log(data)
        // return data

        
      } 
    
  
    return (
      <div>
        <h2>Add a pet here!</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={pet.name}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
  
          <div>
            <label>
              Age:
              <input
                name="age"
                value={pet.age}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Breed:
              <input
                name="breed"
                value={pet.breed}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
  
          <button type="submit">
            {loading ? 'Adding...' : 'Add Item'}
          </button>
        </form>
      </div>
    );
  };
  
  export default AddPet;