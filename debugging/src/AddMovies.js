import React, { useState } from 'react';

const AddMovies = ({ addNewMovie }) => { 
  const [input, setInput] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const handleAddMovie = () => {
    addNewMovie(input);
    setInput({
      title: '',
      description: '',
    });
  };

  return (
    <div>
      <label>Title</label>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={input.title}
        onChange={handleChange}
      /> 
      <br />

      <label>Description</label>
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={input.description}
        onChange={handleChange}
      /> 
      <br />

      <button onClick={handleAddMovie}>Add</button>
    </div>
  );
};

export default AddMovies;