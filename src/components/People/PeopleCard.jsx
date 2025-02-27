
import React, { useState } from 'react';

export default function PeopleCard({ items }) {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="container  mt-5">
      <div className="row d-flex justify-content-center">
        {items.map((item) => (
          <div key={item.id} className="col-lg-3 col-md-12 col-sm-12 text-center item-card ">
            <img
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt={item.name}
              className="rounded w-75"
            />
            <div className="m-3 mb-5">
              <h5 style={{ color: 'brown' }}>{item.name}</h5>
              <button
                className="btn btn-sm mt-2" style={{backgroundColor: 'brown', color:'white'}}
                onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
              >
                {selectedId === item.id ? 'Closing' : 'View Details'}
              </button>
              {selectedId === item.id && (
                <div className="mt-2">
                  <p> 📊 popularity : {item.popularity}</p>
                  <p>🎭Known For : {item.known_for_department}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}