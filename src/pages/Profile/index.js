import React from 'react';
import ResizePanel from 'react-resize-panel';

import { Grid, Row, Col } from './styles';

export default function Profile() {
  return (
    <Grid>
      <Row>
        <ResizePanel
          direction="e"
          handleClass="customHandle"
          style={{ minWidth: '50px', maxWidth: '50px' }}
        >
          <Col size={1}>Left Panel</Col>
        </ResizePanel>

        <ResizePanel
          direction="e"
          handleClass="customHandle"
          style={{ minWidth: '120px', maxWidth: '200px' }}
        >
          <Col size={1}>Directory files</Col>
        </ResizePanel>
        <ResizePanel
          direction="e"
          handleClass="customHandle"
          style={{ minWidth: '400px', maxWidth: '550px' }}
        >
          <Col size={1}>Content text</Col>
        </ResizePanel>

        <Col size={1}>View Result</Col>
      </Row>
    </Grid>
  );
}
