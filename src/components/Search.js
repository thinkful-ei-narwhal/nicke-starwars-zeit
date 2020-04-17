import React from 'react';

export default function Search(props) {
  return (
    <form onSubmit={e => props.fetchSearch(e)}>
      <label htmlFor="category">Select category: </label>
      <select type="text" name="category" >
        <option value="people" >Characters</option>
        <option value="planets">Planets</option>
        <option value="starships">Spaceships</option>
        <option value="vehicles">Vehicles</option>
        <option value="films">Films</option>
        <option value="species">Species</option>
      </select>
      <br />
      <label htmlFor="search">Search for term: </label>
      <input type="text" name="search" />
      <br />
      <button>Search!</button>
    </form>
  )
}