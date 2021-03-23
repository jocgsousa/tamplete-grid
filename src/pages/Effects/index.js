import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { uniqueId } from 'lodash';
import { Container, FadeIn, Item, InputText, Form } from './styles';

export default class Effects extends Component {
  state = {
    text: '',
    todos: [],
  };

  handleAddTodo = (e) => {
    this.setState({ text: e.target.value });
  };

  handleAdd = () => {
    const { text, todos } = this.state;
    const data = [
      ...todos,
      {
        id: uniqueId(),
        text,
      },
    ];
    this.setState({
      todos: data,
    });

    console.log(todos);
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <Form>
          <InputText onChange={this.handleAddTodo} />
          <Button variant="contained" color="primary" onClick={this.handleAdd}>
            Add
          </Button>
        </Form>
        <Container>
          {todos.map((item) => (
            <FadeIn duration="0.5s" delay="0.5s">
              <Item>{item.text}</Item>
            </FadeIn>
          ))}
        </Container>
      </>
    );
  }
}
