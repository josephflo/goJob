import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import {getName} from '../../redux/actions/actions';
import './SearchBar.css';

const SearchBar = () => {
    const dispatch = useDispatch()
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value.toLowerCase())
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    dispatch(getName(name))
    setName('')
  }

  return (
    <div className="searchBar">
      <input
        type="text"
        className="input"
        onChange={(e) => handleInputChange(e)}
      />
 
      <button type="submit" className="btn" onClick={(e) => handleSubmit(e)}>Ver perfiles</button>
    </div>
  );
};

export default SearchBar;
