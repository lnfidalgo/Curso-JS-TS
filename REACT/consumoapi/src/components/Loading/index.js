import React from 'react';
import PropTypes from 'prop-types';
import { SpinnerContainer } from './styled';

export default function Loading({ isLoading }) {
  if (!isLoading) return <></>;
  return (
    <SpinnerContainer>
      <div className="loading-spinner" />
    </SpinnerContainer>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
