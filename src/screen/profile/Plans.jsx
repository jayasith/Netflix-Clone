import React from 'react';
import './Plans.css';

function Plans() {
  return (
    <div className='plans'>
      <dvi className='plan'>
        <div className='plan__info'>
          <h5>Premium</h5>
          <h6>4K + HDR</h6>
        </div>
        <button>Subscribe</button>
      </dvi>
      <dvi className='plan'>
        <div className='plan__info'>
          <h5>Standard</h5>
          <h6>1080p</h6>
        </div>
        <button>Subscribe</button>
      </dvi>
      <dvi className='plan'>
        <div className='plan__info'>
          <h5>Basic</h5>
          <h6>720p</h6>
        </div>
        <button>Subscribe</button>
      </dvi>
    </div>
  );
}

export default Plans;
