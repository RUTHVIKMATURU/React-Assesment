import React, { useState, useEffect } from 'react';
import Apiuser from './Apiuser';
import './Apiuser.css';

function Api() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let user = [
      {
        users: "https://reqres.in/api/users?page=2",
        method: "GET"
      }
    ];

    fetch(user[0].users, {
      method: user[0].method
    })
      .then(response => response.json())
      .then(json => {
        setData(json.data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className='display-3 api'>
      {
        data.map((element, index) => (
          <Apiuser key={index} element={element}/>
        ))
      }
    </div>
  );
}

export default Api;
