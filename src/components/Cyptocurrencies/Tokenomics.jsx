import React from 'react'

const Tokenomics = () => {
  return (
    <div>
      <h2>Tokenomics</h2>
      <br />
      <br />
      <h2>Intial Distribution</h2>
      <br />
      <div className="circle">
        <div className="clc"></div>
        <div className="content">
          <div className="cnt-in">
            <div className="cnt-cr"></div>
            <para>Crowdsale investors: 80%</para>
          </div>
          <div className="cnt-in">
            <div className="cnt-f"></div>
            <para>Foundation: 20%</para>
          </div>
        </div>
      </div>
      <para>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
        omnis voluptate alias! Perferendis, possimus dolore officia asperiores
        maxime ducimus ut blanditiis recusandae quae unde voluptate.
      </para>
    </div>
  );
}

export default Tokenomics