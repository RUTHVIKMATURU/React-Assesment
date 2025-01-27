import React, { useEffect, useState } from 'react';
import Usercount from './Usercount';
import User from './User';
function Users() {
  const [usersinfo, setUsersinfo] = useState([]);
  
  let [usercount,setusercount]=useState(0)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(res => {
        setUsersinfo(res); 
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  function addUserClicked(){
    setusercount(usercount+1);
  }
  return (
    <div>
      <Usercount usercount={usercount}/>
      <div className="users d-flex flex-wrap justify-content-center"> 
      {
        usersinfo.map((user, index) => (
          <User key={user.id} userinfo={user} addUserClicked={addUserClicked}/> 
        ))
      }
      </div>
    </div>
  );
}

export default Users;
