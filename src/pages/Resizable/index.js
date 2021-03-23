import React from 'react';
import ResizePanel from 'react-resize-panel';
import { Link } from 'react-router-dom';
import { Button, Avatar } from '@material-ui/core';
import Avatars from '../../assets/perfil.png';
import { Grid, Row, Col, ItemList, Option } from './styles';

export default function Profile() {
  return (
    <Grid>
      <Link to="/efects" style={{ color: '#FFF' }}>
        Terceiro exemplo
      </Link>
      <Row>
        <ResizePanel
          direction="e"
          handleClass="customHandle"
          borderClass="curstomResizeBorder"
          style={{ minWidth: '100px', maxWidth: '100px' }}
        >
          <Col size={1}>
            <ItemList>
              <Option>
                <center>
                  <Avatar src={Avatars} />
                </center>
              </Option>

              <Option>
                <Button variant="contained" color="primary">
                  Hello Menu
                </Button>
              </Option>
            </ItemList>
          </Col>
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
