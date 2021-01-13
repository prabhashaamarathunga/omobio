import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {

state ={
    id:"",
    name:"",
    username: "",
    email: ""
  }



  handlesubmit = e => {
    e.preventDefault();
    const url = "http://localhost:80/bizlogic/";
    axios.post(url, formData)
    .then(res=>console.log(res.data))
    .catch(err=> console.log(err));
  }

  getData() {
    var res = await this.handlesubmit();
    await Setusers(res.data.data);
    $("#userlist").dataTable();
  }

  readydata(){

  }
  
  render() {
    return (
      <div>
            <table id="userlist">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>{readydata()}</tbody>
         </table>
      </div>
    );
  }
}

export default App;