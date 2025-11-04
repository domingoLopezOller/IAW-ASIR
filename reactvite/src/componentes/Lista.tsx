import React from 'react'

export const ListarItems= () => {
    let ITEMS = ['cat', 'dog', 'bird']; 
    function getItemsList(){
        let contador=0;
        return ITEMS.map((i,key) => <li key={key}>{i}</li>);
    }
    return (
        <ul>
            {getItemsList()}
        </ul>
    );
}

export const ListarItems2= () => {
    let ITEMS = [{id:1,pet:'cat',raza:'gato'},{id:2,pet:'dog',raza:'perro'},{id:3,pet:'bird',raza:'pájaro'}];
    function getItemsList(){
        return ITEMS.map(item => <li key={item.id}>{item.raza} {item.pet}</li>);
    }
    return (
        <ul>
            {getItemsList()}
        </ul>
    );
}


import json2 from '../heroes.json';
export const ListarItems3= () => {
  function getItems(){ return json2.map((heroe,index) => {
      if (heroe.publisher=="Marvel Comics"){
        return <tr key={index}> <td><strong>{heroe.superhero}</strong></td><td>{heroe.alter_ego}</td></tr>;
      }
    });
  }
  return (
    <table>
        <thead></thead>
        <tbody>
            {getItems()}
        </tbody>
    </table>
  )
}