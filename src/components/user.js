import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import '../css/user.css'
// $ is a shortcut for jQuery methods
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {bananasReceived: ""}
    this.getBananas = this.getBananas.bind(this)
  }
  //changed from port 3000 to 5000
  getBananas() {
    let token = "Bearer " + localStorage.getItem("jwt")
    console.log(token)
    $.ajax({
      url: "http://45.55.72.9:3000/api/patterns",
      type: "GET",
      beforeSend: function(xhr)
      {xhr.setRequestHeader('Authorization', token) },
      context: this, // Allows us to use this.setState inside success
      success: function (result) {
        this.setState({bananasReceived: JSON.stringify(result)})
      }
    })
  }
  //changed from port 3000 to 5000
  login () {
      const email = $("#email").val()
      const password = $("#password").val()
      const request = {"auth": {"email": email, "password": password}}
      console.log(request)
      $.ajax({
        url: "http://45.55.72.9:3000/api/user_token",
        type: "POST",
        data: request,
        dataType: "json",
        success: function (result) {
          console.log(result)
          localStorage.setItem("jwt", result.jwt)
        },
        error: function(jqXHR, exception) {
          var msg = '';
          if (jqXHR.status === 0) {
              msg = 'Not connected.\n Verify Network.';
          } else if (jqXHR.status == 404) {
              msg = 'Requested page not found. [404]';
          } else if (jqXHR.status == 500) {
              msg = 'Internal Server Error [500].';
          } else if (exception === 'parsererror') {
              msg = 'Requested JSON parse failed.';
          } else if (exception === 'timeout') {
              msg = 'Time out error.';
          } else if (exception === 'abort') {
              msg = 'Ajax request aborted.';
          } else {
              msg = 'Uncaught Error.\n' + jqXHR.responseText;
          }
          console.log(msg);
          console.log(jqXHR);
        }
      })
      
  }
  signUp () {
  	  const newName = $("#new-name").val()
  	  const newEmail = $("#new-email").val()
      const newPassword = $("#new-password").val()
      const newPasswordConfirmation = $("#new-password-confirmation").val()
      const newRequest = { "user": {"name": newName, 
      					  			"email": newEmail, 
      					  			"password": newPassword,
      					  			"password_confirmation": newPasswordConfirmation
      					  		   }
      					 }
      console.log(newRequest)
      //changed from port 3000 to 5000
      $.ajax({
        url: "http://45.55.72.9:3000/api/users",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: newRequest,
        dataType: "json",
        success: function (newResult) {
          console.log(newResult)
          localStorage.setItem("jwt", newResult.jwt)
        }
      })
  }
  render() {
      return (
        <div className="App flex-grid">
          <div className="login forms col">
	          <h1>
	            Log in
	          </h1>
	          <form>
	            <label htmlFor="email">Email: </label>
	            <br />
	            <input
	              name="email"
	              id="email"
	              type="email"
	            />
	            <br /><br />
	            <label htmlFor="password">Password:</label>
	            <br />
	            <input
	              name="password"
	              id="password"
	              type="password"
	            />
	          </form>
              <br />
              <button
                onClick={this.login}
              >
                Login
              </button>
          </div>
          <div className="or col">
            <h1>OR</h1>
          </div>
          <div className="signUp forms col">
          	<h1>
	            Sign Up
	        </h1>
            <form>
	            <label htmlFor="new-name">Name: </label>
	            <br />
	            <input
	              name="new-name"
	              id="new-name"
	              type="new-name"
	            />
	            <br /><br />
	            <label htmlFor="new-email">Email: </label>
	            <br />
	            <input
	              name="new-email"
	              id="new-email"
	              type="new-email"
	            />
	            <br /><br />
	            <label htmlFor="new-password">Password:</label>
	            <br />
	            <input
	              name="new-password"
	              id="new-password"
	              type="password"
	            />
	            <br /><br />
	            <label htmlFor="new-password-confirmation">Password Confirmation:</label>
	            <br />
	            <input
	              name="new-password-confirmation"
	              id="new-password-confirmation"
	              type="password"
	            />
            </form>
            <br />
            <button
              onClick={this.signUp}
            >
                Sign Up
            </button>
          </div>
        </div>
        );
    }
}


export default App
