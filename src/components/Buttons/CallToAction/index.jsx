import React from 'react';
import './styles.css';
import Button from '@components/Buttons/button';

const CallToAction = ({ visible, showSearchPanel }) => {

  return (
    <Button size="large" bgColor="gray" onClick={() => showSearchPanel(!visible)}>
      Search for Places
    </Button>
  );
}

export default CallToAction;
