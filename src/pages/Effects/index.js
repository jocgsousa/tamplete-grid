import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { uniqueId } from 'lodash';
import {
  Container,
  FadeIn,
  Item,
  InputText,
  Form,
  ScrollTodos,
} from './styles';

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
    const data = {
      id: uniqueId(),
      text,
    };

    this.setState({
      todos: [...todos, data],
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
          <ScrollTodos>
            {todos.map((item) => (
              <FadeIn key={item.id} duration="0.3s" delay="0.2s">
                <Item>{item.text}</Item>
              </FadeIn>
            ))}
          </ScrollTodos>
        </Container>
      </>
    );
  }
}
