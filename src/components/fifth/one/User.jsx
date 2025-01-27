

function User({userinfo,addUserClicked}) {
  function handleclick(){
    addUserClicked()
  }
  return (
    <div className="display-1 bg-info p-3 m-3">
      <p className="lead">{userinfo.name}</p>
      <p className="lead">{userinfo.email} </p>
      <p className="lead">{userinfo.phone}</p>
      <p className="lead">{userinfo.website}</p>
      <button className="btn btn-warning" onClick={handleclick}>Add user</button>
    </div>
  )
}

export default User;