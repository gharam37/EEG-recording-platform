import React, {Component} from 'react';

/* Import Components */
import Input from './components/Input';
import TextArea from './components/TextArea';
import Button from './components/Button'

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        age: '',
        gender: '',


      },



    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
      this.handleFullName = this.handleFullName.bind(this);
      this.handleGender = this.handleGender.bind(this);
      this.handleAge = this.handleAge.bind(this);

  }

  /* This life cycle hook gets executed when the component mounts */

  handleFormSubmit(e) {
    console.log('hiiiiiiii')

  e.preventDefault();
  let userData = this.state.newUser;
  console.log(userData)
  var data1=null
  fetch('http://localhost:3030/api/Users',{
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => {
      response.json().then(data =>{

        data1=data._id
           console.log("Successful " + data1);
           this.props.history.push({
           pathname: '/recording',
           state: {
             newUser: {
               name:this.state.newUser.name,
               age:this.state.newUser.age,
               gender:this.state.newUser.gender,
               id:data1

             }
           }
         })
      })
  })



  }
  handleClearForm() {
    // Logic for resetting the form
  }
  handleFullName(e) {
   let value = e.target.value;
   this.setState( prevState => ({ newUser :
        {...prevState.newUser, name: value
        }
      }))
  }

  handleGender(e) {
   let value = e.target.value;
   this.setState( prevState => ({ newUser :
        {...prevState.newUser, gender: value
        }
      }))
  }
  handleAge(e) {
   let value = e.target.value;
   this.setState( prevState => ({ newUser :
        {...prevState.newUser, age: value
        }
      }))
  }
  render() {
    return (
      <div>
      <p>
        Hi ! Tell Us About You
      </p>
      <form className="container" onSubmit={this.handleFormSubmit}>
        <Input className="Name" placeholder = {'Your name'} handleChange = {this.handleFullName} /> {/* Name of the user */}
        <Input className="Gender" placeholder = {'Your Gender'}  handleChange = {this.handleGender}/> {/* Gender */}
        <Input className="Age" placeholder = {'Your Age'}  handleChange = {this.handleAge}/> {/* Age */}
        <button id='Start' className="Start"  >Start The Experiment!</button>      </form>
      </div>
    );
  }
}

export default FormContainer;
