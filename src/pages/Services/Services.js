import React from 'react';
import { homeObjOne, homeObjThree } from './Data';
import { InfoSection, Pricing } from '../../components';

function Services() {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  )
}

export default Services;
