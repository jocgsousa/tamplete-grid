import React, { Component } from 'react';

// import { Link } from 'react-router-dom';

// import ResizePanel from 'react-resize-panel';
// //

import { Grid, Row, Col, MenuOption, ButtonOption } from './styles';

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
          <Row display="grid">
            <Col
              painel_left
              animation="fadein"
              duration="0.2s"
              delay="1s"
              size={1}
            >
              <h1>SIAS</h1>
              <MenuOption>
                <li>
                  <ButtonOption>Opção 1</ButtonOption>
                </li>
              </MenuOption>
            </Col>
            <Col painel animation="fadein" duration="0.2s" delay="1s" size={8}>
              Segundo item
            </Col>
          </Row>
        </Grid>
      </>
    );
  }
}
