import React, { useState } from 'react';

function NewPlayerForm({ onSubmit, onCancel }) {
  const [newPlayer, setNewPlayer] = useState({
    name: '',
    breed: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPlayer((prevPlayer) => ({
      ...prevPlayer,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Call the onSubmit function with the new player data
    onSubmit(newPlayer);
  };

  const isSubmitDisabled = !newPlayer.name || !newPlayer.breed || !newPlayer.status;

  return (
    <div>
      <h2>New Player Form</h2>
      <label>Name</label>
      <input type="text" name="name" value={newPlayer.name} onChange={handleChange} />
      <label>Breed</label>
      <input type="text" name="breed" value={newPlayer.breed} onChange={handleChange} />
      <label>Status</label>
      <input type="text" name="status" value={newPlayer.status} onChange={handleChange} />
      <label>Image</label>
      <input type="text" name="image url" value={newPlayer.imageurl} onChange={handleChange} />
      <button onClick={handleSubmit} disabled={isSubmitDisabled}>Submit</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  )
}

export default NewPlayerForm;
