import logo from './logo.svg';
import './App.css';
import Message from './Message'
import {useState} from 'react'
import axios from 'axios'
import { useEffect } from "react";
function Employees() {
   
  const [employees,setEmployees]=useState([])
  const [count,setCount] =useState(0)
  const [name,setName]=useState(null)

  useEffect(()=>{
   axios.get('http://localhost:8080/reactemployees',{headers:{
'Authorization':'Basic bWljcm9jYXJlOjEyM2FBYmM='
   }}).then(
     resp =>

     {
      console.log(resp.data) 
      setEmployees(resp.data)}
   )

    
    })


  return (
    <div className="App">
     <div className="container" align="center">
<div className="d-flex justify-content-end">
<input type="text" id="myInput"  placeholder="Search for data.." /> 
  <form method="post"> 
         <input type="submit" value="Sign Out" className='btn btn-success'/> 
         </form>
         </div>
<table id="myTable" className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Employee Id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>

    </tr>
  </thead>
  <tbody>
   {employees.map((employee,index) =>
   (

    <tr key={employee.employee_id}>
      <td>{employee.employee_id}</td>
      <td>{employee.first_name}</td>
      <td>{employee.last_name}</td>
      <td>{employee.email}</td>
      <td>{employee.phone}</td>
    </tr>
   )
    )}
   
  </tbody>
</table>


</div>
<a href="/employees">go to employees</a>
    </div>
  );
}

export default Employees;
