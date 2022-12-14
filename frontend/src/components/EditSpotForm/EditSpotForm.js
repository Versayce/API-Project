//NOTE: THIS FILE IS NO LONGER IN USE.

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editSpotById } from "../../store/spots";
import { useHistory } from "react-router-dom";

function EditSpotForm({ setShowModal, spot }) {
  const { avgRating } = spot
  const dispatch = useDispatch();
  const history = useHistory();

  const [address, setAddress] = useState(spot.address);
  const [city, setCity] = useState(spot.city);
  const [state, setState] = useState(spot.state);
  const [country, setCountry] = useState(spot.country);
  const [name, setName] = useState(spot.name);
  const [description, setDescription] = useState(spot.description);
  const [price, setPrice] = useState(spot.price);
  const [imageUrl, setImageUrl] = useState(spot.previewImage)
  const [errors, setErrors] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (address.length > 4 && city.length > 4 && state.length > 4 && country.length > 2 && name.length > 4 && description.length > 20) {
    history.push('/spots/current');
    setErrors([]);
    return dispatch(editSpotById(editedSpot))
    .then(() => setShowModal(false))
    .catch(async (res) => {
      const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    };

    if(address.length <= 4) {
      return setErrors(['Address must be longer than 4 characters'])
    }
    else if(city.length <= 4) {
      return setErrors(['City must be longer than 4 characters'])
    }
    else if(state.length <= 4) {
      return setErrors(['State must be longer than 4 characters'])
    }
    else if(country.length <= 2) {
      return setErrors(['Country must be longer than 2 characters'])
    }
    else if(name.length <= 4) {
      return setErrors(['Name must be longer than 4 characters'])
    }
    else if(description.length <= 20) {
      return setErrors(['Description must be longer than 20 characters'])
    }
  };
  
  const editedSpot = {
    spotId: spot.id,
    address,
    city,
    state,
    country,
    name,
    description,
    price,
    "previewImage": imageUrl,
    avgRating
  }
  
  return (
    <form id="edit-spot-form" onSubmit={handleSubmit}>
      <h1>Edit Spot</h1>

      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      
      <label>Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      
      <label>City</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      
      <label>State</label>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
      
      <label>Country</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      
      <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      
      <label>Description</label>       
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      
      <label>Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
    
      <label>Image Url</label>
        <input
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      
      <span className='form-button'>
          <input type="submit" value='Save Changes' />
        </span>
    </form>
  );
}

export default EditSpotForm;
