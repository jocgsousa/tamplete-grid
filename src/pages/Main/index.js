import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ResizePanel from 'react-resize-panel';
//

import { Grid, Row, Col } from './styles';

export default class Main extends Component {
  state = {
    // user: [],
  };

  // async componentDidMount() {
  //   const response = await api.get();
  //   this.setState({
  //     user: response.data,
  //   });
  // }

  //   console.log(response.data);

  render() {
    return (
      <>
        <Grid>
          <Link to="/profile">{'Segundo exemplo >'}</Link>
          <Row>
            <Col size={1}>Longa coluna</Col>
          </Row>
          <Row>
            <Col size={1}>Coluna 1</Col>
            <Col size={1} collapse="xs">
              Coluna 2 podera desaparecer se tiver a prop collapse
            </Col>
            <Col size={1} collapse="big">
              Coluna 3
            </Col>
          </Row>

          <Row>
            <ResizePanel
              direction="e"
              handleClass="customHandle"
              style={{ flex: '1' }}
            >
              <Col size={1} style={{ minWidth: '20%' }}>
                Conteúdo 1
              </Col>
            </ResizePanel>
            <Col size={1} style={{ minWidth: '20%' }}>
              Conteúdo 2
            </Col>
          </Row>
        </Grid>
      </>
    );
  }
}
