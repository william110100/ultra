import React from 'react';
import { homeObjOne, homeObjThree } from './Data';
import { InfoSection } from '../../components';

function SignUp() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  )
}

export default SignUp;
