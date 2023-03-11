import React from "react";

function Pokedex() {
  return (
    <>
      <div className='pokedex-body'>
        <div className='pokedex-left'>
          <div className='points'>
          </div>
          <div className='header'>
            <div className='circle-first'>
              <div className='circle-second'>
              </div>
            </div>
            <input type="text" className='search-bar' />
          </div>
          <div className='div=img'>
            <img src={''} alt='pokemon' />
          </div>
        </div>
        <div className='pokedex-right'>
          <div className='pokemon-name'>
            <h2>pokemon name</h2>
          </div>
          <div className='pokemon-description'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, porro.</p>
          </div>
          <button type='button'>{'<'}</button>
          <button type='button'>{'>'}</button>
        </div>
      </div>
    </>
  )
}

export default Pokedex;