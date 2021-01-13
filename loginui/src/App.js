import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {

state ={
    username: "",
    password: ""
  }

handlelogin =async e => {
  await this.setState({
    username : e.target.value
  })
}

handlepasssword =async e => {
  await this.setState({
    password : e.target.value
  })
}

  handlesubmit = e => {
    e.preventDefault();
    console.log(this.state.username);
    let formData = new FormData();
    formData.append("username",this.state.username);
    formData.append("password",this.state.password);
    const url = "http://localhost:80/bizlogic/";
    axios.post(url, formData)
    .then(res=>console.log(res.data))
    .catch(err=> console.log(err));
  }

  render() {
    return (
      <div>
                <form>
                    <div>
                      <input onChange={this.handlelogin} type="text" id="username" placeholder= "Enter Username" value={this.state.username}/>
                    </div>
                    <div>
                    <input onChange={this.handlepasssword} type="password" id="password" placeholder= "Enter Password" value={this.state.password}/>
                    </div>
                    <br></br>
                    <div>
                      <div>
                        <button onChange={this.handlesubmit} id="login_user" type="submit">Login</button>
                      </div>
                    </div>
                    </form>

      </div>
    );
  }
}

export default App;