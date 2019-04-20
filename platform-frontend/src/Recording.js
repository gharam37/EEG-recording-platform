import React, {Component} from 'react';
import video from './vid.mp4'
import happy from './happy.jpg'
import sad from './sad.jpg'


import io from 'socket.io-client'

import StarRatingComponent from 'react-star-rating-component';

/* Import Components */


class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing:false,
      valence:1,
      arousal:1,
      emotion:0




    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.onHappyClick = this.onHappyClick.bind(this);
    this.onSadClick = this.onSadClick.bind(this);

        this.playVideo=this.playVideo.bind(this)


  }
  onValenceClick(nextValue, prevValue, name) {
      this.setState({valence: nextValue});
      console.log(nextValue)

  }
onArousalClick(nextValue, prevValue, name) {
        this.setState({arousal: nextValue});

}
onEmotionClick(nextValue, prevValue, name) {
          this.setState({emotion: nextValue});

}
onHappyClick() {
    this.setState({emotion: 0});
    console.log(this.state.emotion)

}
onSadClick(nextValue, prevValue, name) {
  this.setState({emotion:1});
  console.log(this.state.emotion)
}
  /* This life cycle hook gets executed when the component mounts */

  handleFormSubmit(e) {

  e.preventDefault();
  fetch('http://localhost:3030/api/Valences',{
      method: "POST",
      body: JSON.stringify({
        name:this.props.location.state.newUser.name,
        userID:this.props.location.state.newUser.id,
        value:this.state.valence
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => {
      response.json().then(data =>{
           console.log("Successful " + data);
      })
  })

  fetch('http://localhost:3030/api/Arousals',{
      method: "POST",
      body: JSON.stringify({
        name:this.props.location.state.newUser.name,
        userID:this.props.location.state.newUser.id,
        value:this.state.arousal
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => {
      response.json().then(data =>{
           console.log("Successful " + data);
      })
  })


  fetch('http://localhost:3030/api/Emotions',{
      method: "POST",
      body: JSON.stringify({
        name:this.props.location.state.newUser.name,
        userID:this.props.location.state.newUser.id,
        value:this.state.emotion
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => {
      response.json().then(data =>{
           console.log("Successful " + data);
      })
  })

  }

  playVideo() {
    this.video.play()



}

componentDidMount() {


  this.video.addEventListener('ended', (event) => {
    console.log("Done");
    //console.log('Printing status'+this.state.playing)

this.setState(() => ({ playing: true }))});
}
componentWillUnmount() {
  this.video.RemoveEventListener('ended', (event) => {
    console.log('Video stopped either because 1) it was over, ' +
        'or 2) no further data is available.');
  });}
  render() {

    //console.log("Just Stuff"+this.props.location.state.newUser.id)
    const ref = (el) => { this.video = el }

    return (
      <div>

      <p>
        Welcome to the expirement
      </p>
      <div>

      <video ref={ref}  src={video}  type="video/mp4"></video>
    <button id='playButton'  onClick={this.playVideo}>Whenever you are ready!</button>
    </div>


    <div>
        <h2>How was your valence: {this.state.valence}</h2>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={this.state.valence}
          onStarClick={this.onValenceClick.bind(this)}
        />
        <h2>How was your arousal: {this.state.arousal}</h2>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={this.state.arousal}
          onStarClick={this.onArousalClick.bind(this)}
        />

        <div>

        <button onClick={this.onHappyClick}><img src={happy} alt="my image"  /></button>
        <button onClick={this.onSadClick}><img src={sad} alt="my image"  /></button>
        </div>


        <button id='playButton'  onClick={this.handleFormSubmit}>Submit your results!</button>

      </div>

      </div>
    );
  }
}

export default FormContainer;
