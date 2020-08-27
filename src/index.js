import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';


import { Layout,Header,Navigation,Drawer,Content } from 'react-mdl';



class App extends Component {
  render() {
    return (
      <Register />
    );
  }
}
//eslint-disable-next-line
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: '',
        email: '',
        password: '',
        phoneno:'',
        adhar:'',
        religion:'',
        gender:''
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName': 
        errors.fullName = 
          value.length < 5
            ? 'Full Name must be 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      case 'phoneno':
        errors.phoneno = 
        value.length < 10
          ? 'PhoneNo must be 10 characters long!'
          : '';
      case 'adhar':
        errors.adhar = 
        value.length < 15
          ? 'Aadhar must be 14 characters long!'
          : '';    
        break;
      case 'religion': 
        errors.religion = 
        value.length < 5
          ? 'Religion must be atleast 3 characters long!'
          : '';
        break;  
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Create Passport</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className='fullName'>
              <label htmlFor="fullName">Full Name</label>
              <input type='text' name='fullName' onChange={this.handleChange} noValidate />
              {errors.fullName.length > 0 && 
                <span className='error'>{errors.fullName}</span>}
            </div>
            
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' onChange={this.handleChange} noValidate />
              {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
            </div>
            <div className='info'>
              <small>Password must be eight characters in length.</small>
            </div>
            <div className='phoneno'>
              <label htmlFor="phoneno">Phone Number</label>
              <input type='number' name='phoneno' onChange={this.handleChange} noValidate />
              {errors.phoneno.length > 0 && 
                <span className='error'>{errors.phoneno}</span>}
            </div>
            <div className='dob'>
              <label htmlFor="dob">Date of Birth</label>
              <input type='date' name='dob' onChange={this.handleChange} noValidate />
              
            </div>
            <div className='adhar'>
              <label htmlFor="adhar">Aadhar Number</label>
              <input type='number' name='adhar' onChange={this.handleChange} noValidate />
              {errors.adhar.length > 0 &&
                <span className='error'>{errors.adhar}</span>}
            </div>
            <div className='religion'>
              <label htmlFor="religion">Religion</label>
              <input type='text' name='religion' onChange={this.handleChange} noValidate />
              {errors.religion.length > 0 &&
                <span className='error'>{errors.religion}</span>}
            </div>
            <div className='gender'>
              <label htmlFor="gender">Gender</label>
              <input type='radio' name='gender' value='male' />male             
              <input type='radio' name='gender' value='Female'/>Female
              
            </div>

        

            <div className='submit'>
              <button>Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
