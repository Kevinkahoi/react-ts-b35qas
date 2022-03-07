import React from 'react';
import axios from 'axios';

class myComponent extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://newsdata.io/api/1/news?apikey=pub_50360b98cd949913dc9c473dc2da144c098e&country=au,ca';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
  render() {
    return <p>dd</p>;
  }
}
export default myComponent;