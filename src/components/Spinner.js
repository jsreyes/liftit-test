import * as React from 'react';
import { css } from '@emotion/core';
// Another way to import
import ClipLoader from 'react-spinners/ClipLoader';
 
const override = css`
    display: flex;
    flex-direction: center;
    align-items: center;
    margin: 0 auto;
    border-color: red;
`;
 
export default class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='sweet-loading'>
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}