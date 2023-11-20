'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './listing.css';

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null,
    price: '',
    light: '',
    water: '',
    use: '',
    quantity: '',
  });

  const [listingData, setListingData] = useState({
    list_userid: null,
    list_username: null,
    list_date: new Date(),
    quantity: '',
    post: {
      plant_name: '',
      plant_description: '',
      plant_image: null,
      plant_price: '',
      plant_light: '',
      plant_water: '',
      plant_use: '',
    },
  });

  useEffect(() => {
    // Perform localStorage action
    const uid = localStorage.getItem('uid');
    const username = localStorage.getItem('username');

    setListingData({
      ...listingData,
      list_userid: uid,
      list_username: username,
    });
  }, []);

  const handleInputChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    try {
      // Create FormData for image upload
      const formDataForImage = new FormData();
      formDataForImage.append('file', file);

      // Upload image and get the URL
      const response = await axios.post('YOUR_IMAGE_UPLOAD_API_ENDPOINT', formDataForImage);

      // Set the image URL in the form data
      setFormData({
        ...formData,
        image: response.data.imageUrl,
      });

      console.log('Image URL:', response.data.imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setListingData({
      ...listingData,
      quantity: formData.quantity,
      post: {
        plant_name: formData.name,
        plant_description: formData.description,
        plant_image: formData.image,
        plant_price: formData.price,
        plant_light: formData.light,
        plant_water: formData.water,
        plant_use: formData.use,
      },
    });

    console.log('Final Form Data:', listingData);

    // Perform additional logic or API call if needed
  };

  return (
    <>
      <div className="form_container">
        <h2>List your Plant</h2>
        <form onSubmit={handleSubmit}>
          <div className="input_container">
            <label>name</label>
            <input
              onChange={(e) => handleInputChange(e, 'name')}
              className="signup_input"
              type="text"
            />
          </div>

          <div className="input_container">
            <label>description</label>
            <input
              onChange={(e) => handleInputChange(e, 'description')}
              className="signup_input"
              type="text"
            />
          </div>

          <div className="input_container">
            <label>price</label>
            <input
              onChange={(e) => handleInputChange(e, 'price')}
              className="signup_input"
              type="number"
            />
          </div>

          <div className="input_container">
            <label>light</label>
            <input
              onChange={(e) => handleInputChange(e, 'light')}
              className="signup_input"
              type="text"
            />
          </div>

          <div className="input_container">
            <label>water</label>
            <input
              onChange={(e) => handleInputChange(e, 'water')}
              className="signup_input"
              type="text"
            />
          </div>

          <div className="input_container">
            <label>use</label>
            <input
              onChange={(e) => handleInputChange(e, 'use')}
              className="signup_input"
              type="text"
            />
          </div>

          <div className="input_container">
            <label>quantity</label>
            <input
              onChange={(e) => handleInputChange(e, 'quantity')}
              className="signup_input"
              type="text"
            />
          </div>

          <div className="input_container">
            <label>image</label>
            <input
              onChange={handleImageUpload}
              className="signup_input"
              type="file"
            />
          </div>

          <div className="submit_container">
            <button type="submit" className="signup_submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}


