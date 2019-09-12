import React from 'react';
import Firebase from 'firebase';

class Raindrops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      command: 'default',
      currentUrlIndex: 0,
      urls: [
        "https://i.giphy.com/media/it1EknihaJwqs/giphy.gif",
        "https://i.giphy.com/media/26vUU4DxOJrXsJCBW/giphy.gif",
        "https://i.giphy.com/media/KBm1L3QujrAT6/giphy.gif",
        "https://i.giphy.com/media/n7vIRMqxCelTa/giphy.gif",
        "https://i.giphy.com/media/qnPp6q4lpQRsk/giphy.gif",
        "https://i.giphy.com/media/xT0BKwLPTNJvyyAoaQ/giphy.gif",
        "https://i.giphy.com/media/1Sp9scsT89HZS/giphy.gif",
        "https://i.giphy.com/media/FcVCVXpugGiFq/giphy.gif"
      ]
     };
  }

  componentDidMount() {
    const db = Firebase.firestore();
    const raindropsRef = db.collection(`/commands`);

    raindropsRef.onSnapshot((querySnapshot) => {
      let command = '';

      querySnapshot.forEach((doc) => {
        command = doc.data().command;
      });

      let currentUrlIndex;
      if (command === 'previous') {
        currentUrlIndex = this.state.currentUrlIndex - 1;
        
        if (currentUrlIndex < 0) {
          currentUrlIndex = 0;
        }
      } else if (command === 'next') {
        currentUrlIndex = this.state.currentUrlIndex + 1;

        if (currentUrlIndex > 7) {
          currentUrlIndex = 7;
        }
      }

      this.setState({ command: command, currentUrlIndex: currentUrlIndex });
    });
  }

  render() {
    const command = this.state.command;

    if (command !== 'default') {
      let currentUrl;
      currentUrl = this.state.urls[this.state.currentUrlIndex];

      // if (command === 'previous') {

      //   // return (
      //   //   <div>
      //   //     <p style={{ flex: 1 }}>{command}</p>
      //   //     <img src={{currentUrl}} />
      //   //   </div>
      //   // );
      // } else if (command === 'next') {
      //   // return (
      //   //   <div>
      //   //     <p style={{ flex: 1 }}>{command}</p>
      //   //     <img src={{currentUrl}} />
      //   //   </div>
      //   // );
      // }

      return (
        <div>
          <p style={{ flex: 1 }}>{command}</p>
          <img src={currentUrl} />
        </div>
      );
      
      // return (
      //   <div style={{ flex: 1 }}>{command}</div>
      // );
    }

    return (
      <p>
        Raindrops
      </p>
    );
  }
}

export default Raindrops;