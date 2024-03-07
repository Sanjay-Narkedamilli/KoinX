import React from 'react'
import Coinlike from './Coinlike'

const Alsolike = () => {
  return (
    <div>
      <h2>You May Also Like</h2>
      <Coinlike />
      <h2>Trending Coins</h2>
      <Coinlike />
    </div>
  );
}

export default Alsolike