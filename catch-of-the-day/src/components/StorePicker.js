import React from 'react';

class StorePicker extends React.Component {
  render() {
    //Any where else!
    return (
      <form className="">
      { /* Hello! Make sure to never put this
        comment as the first element you return in your
        return function. Put it nested within! */}
      <h2>Please enter a store</h2>
      <input type="text" placeholder="Store Name" />
      <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;
