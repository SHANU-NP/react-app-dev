import React, { useState } from 'react';
import axios from 'axios';
import './FormComponent.css';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    legalStatus: 'Owned',
    locationType: 'Single',
    locationAddress: '',
    tradeNature: 'Within India',
    procurement: 'Within India',
    market: 'Within India',
    productList: false,
    beeKeeping: {
      hives: '',
      honeyQuantity: '',
      beeType: ''
    },
    livestock: {
      dairy: false,
      poultry: false,
      rabbits: false,
      caprine: false,
      porcine: false,
      bovine: false,
      products: {
        milk: false,
        processedMilk: false,
        meatProducts: false,
        liveAnimals: false,
        breederStock: false,
        egg: false
      }
    },
    wildCollection: {
      location: '',
      reserveForest: false,
      collectionProcess: '',
      season: '',
      plantParts: {
        root: false,
        stem: false,
        bark: false,
        leaves: false,
        flowers: false,
        fruits: false,
        seeds: false
      }
    },
    recordKeeping: false,
    recordYears: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const [section, key, subkey] = name.split('.');
    if (section && key) {
      if (subkey) {
        setFormData((prevData) => ({
          ...prevData,
          [section]: {
            ...prevData[section],
            [key]: {
              ...prevData[section][key],
              [subkey]: type === 'checkbox' ? checked : value
            }
          }
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [section]: {
            ...prevData[section],
            [key]: type === 'checkbox' ? checked : value
          }
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/submit', formData)
      .then(response => {
        console.log('Form submitted successfully:', response.data);
      })
      .catch(error => {
        console.error('There was an error submitting the form:', error);
      });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Legal status of unit:</label>
        <select name="legalStatus" value={formData.legalStatus} onChange={handleChange}>
          <option value="Owned">Owned</option>
          <option value="Sub contract">Sub contract</option>
        </select>
      </div>

      <div className="form-group">
        <label>Location of units:</label>
        <select name="locationType" value={formData.locationType} onChange={handleChange}>
          <option value="Single">Single</option>
          <option value="Multi site">Multi site</option>
        </select>
        <input type="text" name="locationAddress" value={formData.locationAddress} onChange={handleChange} placeholder="Location address (if different from above)" />
      </div>

      <div className="form-group">
        <label>Trading: Nature of trade:</label>
        <select name="tradeNature" value={formData.tradeNature} onChange={handleChange}>
          <option value="Within India">Within India</option>
          <option value="Outside India">Outside India</option>
        </select>
      </div>

      <div className="form-group">
        <label>Procurement of products:</label>
        <select name="procurement" value={formData.procurement} onChange={handleChange}>
          <option value="Within India">Within India</option>
          <option value="Outside India">Outside India</option>
        </select>
      </div>

      <div className="form-group">
        <label>Market for products:</label>
        <select name="market" value={formData.market} onChange={handleChange}>
          <option value="Within India">Within India</option>
          <option value="Outside India">Outside India</option>
        </select>
      </div>

      <div className="form-group">
        <label>Attach list of products marketed:</label>
        <label>
          <input type="checkbox" name="productList" checked={formData.productList} onChange={handleChange} /> Yes
        </label>
        <label>
          <input type="checkbox" name="productList" checked={!formData.productList} onChange={handleChange} /> No
        </label>
      </div>

      <div className="form-group">
        <label>Bee keeping:</label>
        <label>
          Number of hives:
          <input type="text" name="beeKeeping.hives" value={formData.beeKeeping.hives} onChange={handleChange} />
        </label>
        <label>
          Quantity of honey produced/year:
          <input type="text" name="beeKeeping.honeyQuantity" value={formData.beeKeeping.honeyQuantity} onChange={handleChange} />
        </label>
        <label>
          Type of bees:
          <select name="beeKeeping.beeType" value={formData.beeKeeping.beeType} onChange={handleChange}>
            <option value="Rock bee">Rock bee</option>
            <option value="Little bee">Little bee</option>
            <option value="Indian bee">Indian bee</option>
            <option value="European bee">European bee</option>
          </select>
        </label>
      </div>

      <div className="form-group">
        <label>Livestock:</label>
        <label>
          <input type="checkbox" name="livestock.dairy" checked={formData.livestock.dairy} onChange={handleChange} /> Dairy
        </label>
        <label>
          <input type="checkbox" name="livestock.poultry" checked={formData.livestock.poultry} onChange={handleChange} /> Poultry
        </label>
        <label>
          <input type="checkbox" name="livestock.rabbits" checked={formData.livestock.rabbits} onChange={handleChange} /> Rabbits
        </label>
        <label>
          <input type="checkbox" name="livestock.caprine" checked={formData.livestock.caprine} onChange={handleChange} /> Caprine
        </label>
        <label>
          <input type="checkbox" name="livestock.porcine" checked={formData.livestock.porcine} onChange={handleChange} /> Porcine
        </label>
        <label>
          <input type="checkbox" name="livestock.bovine" checked={formData.livestock.bovine} onChange={handleChange} /> Bovine
        </label>
      </div>

      <div className="form-group">
        <label>Livestock products:</label>
        <label>
          <input type="checkbox" name="livestock.products.milk" checked={formData.livestock.products.milk} onChange={handleChange} /> Milk
        </label>
        <label>
          <input type="checkbox" name="livestock.products.processedMilk" checked={formData.livestock.products.processedMilk} onChange={handleChange} /> Processed Milk Products
        </label>
        <label>
          <input type="checkbox" name="livestock.products.meatProducts" checked={formData.livestock.products.meatProducts} onChange={handleChange} /> Meat products
        </label>
        <label>
          <input type="checkbox" name="livestock.products.liveAnimals" checked={formData.livestock.products.liveAnimals} onChange={handleChange} /> Live animals for slaughter
        </label>
        <label>
          <input type="checkbox" name="livestock.products.breederStock" checked={formData.livestock.products.breederStock} onChange={handleChange} /> Breeder stock
        </label>
        <label>
          <input type="checkbox" name="livestock.products.egg" checked={formData.livestock.products.egg} onChange={handleChange} /> Egg
        </label>
      </div>

      <div className="form-group">
        <label>Wild collection: Location:</label>
        <input type="text" name="wildCollection.location" value={formData.wildCollection.location} onChange={handleChange} />
        <label>
          <input type="checkbox" name="wildCollection.reserveForest" checked={formData.wildCollection.reserveForest} onChange={handleChange} /> Reserve forest
        </label>
        <label>Collection process:</label>
        <label>
          <input type="radio" name="wildCollection.collectionProcess" value="localGroup" checked={formData.wildCollection.collectionProcess === 'localGroup'} onChange={handleChange} /> By involving local group
        </label>
        <label>
          <input type="radio" name="wildCollection.collectionProcess" value="company" checked={formData.wildCollection.collectionProcess === 'company'} onChange={handleChange} /> Direct by company
        </label>
        <label>Season for collection:</label>
        <label>
          <input type="radio" name="wildCollection.season" value="year" checked={formData.wildCollection.season === 'year'} onChange={handleChange} /> Throughout the year
        </label>
        <label>
          <input type="radio" name="wildCollection.season" value="months" checked={formData.wildCollection.season === 'months'} onChange={handleChange} /> Specific months
        </label>
        <input type="text" name="wildCollection.seasonMonths" value={formData.wildCollection.seasonMonths} onChange={handleChange} placeholder="Specify months if applicable" />
        <label>Part of the plant collected:</label>
        <label>
          <input type="checkbox" name="wildCollection.plantParts.root" checked={formData.wildCollection.plantParts.root} onChange={handleChange} /> Root
        </label>
        <label>
          <input type="checkbox" name="wildCollection.plantParts.stem" checked={formData.wildCollection.plantParts.stem} onChange={handleChange} /> Stem
        </label>
        <label>
          <input type="checkbox" name="wildCollection.plantParts.bark" checked={formData.wildCollection.plantParts.bark} onChange={handleChange} /> Bark
        </label>
        <label>
          <input type="checkbox" name="wildCollection.plantParts.leaves" checked={formData.wildCollection.plantParts.leaves} onChange={handleChange} /> Leaves
        </label>
        <label>
          <input type="checkbox" name="wildCollection.plantParts.flowers" checked={formData.wildCollection.plantParts.flowers} onChange={handleChange} /> Flowers
        </label>
        <label>
          <input type="checkbox" name="wildCollection.plantParts.fruits" checked={formData.wildCollection.plantParts.fruits} onChange={handleChange} /> Fruits
        </label>
        <label>
          <input type="checkbox" name="wildCollection.plantParts.seeds" checked={formData.wildCollection.plantParts.seeds} onChange={handleChange} /> Seeds
        </label>
      </div>

      <div className="form-group">
        <label>Record Keeping: Diary of activities maintained:</label>
        <label>
          <input type="checkbox" name="recordKeeping" checked={formData.recordKeeping} onChange={handleChange} /> Yes
        </label>
        <label>
          <input type="checkbox" name="recordKeeping" checked={!formData.recordKeeping} onChange={handleChange} /> No
        </label>
        {formData.recordKeeping && (
          <input type="text" name="recordYears" value={formData.recordYears} onChange={handleChange} placeholder="If yes, for how many years" />
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
