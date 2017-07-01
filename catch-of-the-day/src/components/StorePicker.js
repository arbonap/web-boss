import React from 'react';

class StorePicker extends React.Component {
  render() {
    // Make sure you don't fuck up a comment
    // inside of JSX
    //Don't put your comments at the top level
    //You can only ever return one overall/ parent html element in JSX
    return (
      <form className="store-selector">
        <h2> Please Enter A Store </h2>

        <input type="text" required placeholder="Store Name"/>
        <button type="submit">Visit Store 🍒 </button>
      </form>
    )
  }
}

export default StorePicker;
