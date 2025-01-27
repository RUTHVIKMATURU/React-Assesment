import './First.css';
function First() {
  let state = [
    {
      name: "Ruthvik",
      eid: 1,
      address: "103",
      salary: 160000
    },
    {
      name: "Vijay",
      eid: 2,
      address: "104",
      salary: 160000
    },
    {
      name: "Navneeth",
      eid: 3,
      address: "105",
      salary: 120000
    },
    {
      name: "Sri vardhan",
      eid: 4,
      address: "102",
      salary: 130000
    },
    {
      name: "Abhilash",
      eid: 5,
      address: "101",
      salary: 150000
    },
    {
      name: "Sai Santosh",
      eid: 6,
      address: "106",
      salary: 145000
    }
  ];

  return (
    <div className='employee'>
      {/* table header */}
      <h1 className='Display-3 text-primary text-center'>EMPLOYEE DETAILS</h1>
      {/*table head  */}
      <table>
        <thead>
          <tr>
            <th>Ename</th>
            <th>Id</th>
            <th>Address</th>
            <th>Salary</th>
          </tr>
        </thead>
        {/*table body  */}
        <tbody>
          {
            state.map((element, index) => (
              // table row
              <tr key={index}>
                <td>{element.name}</td>
                <td>{element.eid}</td>
                <td>{element.address}</td>
                <td>{element.salary}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default First;
