import React from 'react';
import sample from './sample.json';

export default function Aboutus() {
  return (
    <div>
             <h1> List of Something!!</h1>
            <h2> Data should be displayed below</h2>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Latitude</th>
      <th scope="col">Longitude</th>
    </tr>
  </thead>
  <tbody>
    {
            sample && sample.map( (record) => {
                return(<tr>{record.id}<td>{record.name}</td><td>{record.lati}</td><td>{record.lon}</td></tr>)
            })
            }

    </tbody></table>

    </div>
  );
}

