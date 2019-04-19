import React, {Component} from 'react';
import video from './vid.mp4'

/* Import Components */


class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing:false



    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

        this.playVideo=this.playVideo.bind(this)


  }

  /* This life cycle hook gets executed when the component mounts */

  handleFormSubmit(e) {

  e.preventDefault();
  let userData = this.state.newUser;
  console.log(userData)
  fetch('http://localhost:3030/api/Users',{
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => {
      response.json().then(data =>{
        console.log("Successful" + data);
      })
  })
  }

  playVideo() {
  // You can use the play method as normal on your video ref
  //this.refs.el.play();
   this.video.play()

}

componentDidMount() {
  this.video.addEventListener('ended', (event) => {
    console.log("Done");
    console.log('Printing status'+this.state.playing)

this.setState(() => ({ playing: true }))});
}
componentWillUnmount() {
  this.video.RemoveEventListener('ended', (event) => {
    console.log('Video stopped either because 1) it was over, ' +
        'or 2) no further data is available.');
  });}
  render() {

    //console.log("Just Stuff"+this.props.location.state.newUser.name)
    const ref = (el) => { this.video = el }

    return (
      <div>

      <p>
        Welcome to the expirement
      </p>
      <video ref={ref}  src={video}  type="video/mp4"></video>
    <button id='playButton'  onClick={this.playVideo}>Whenever you are ready!</button>

      </div>
    );
  }
}

export default FormContainer;
