import React from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from '../components/TodoTextInput'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`

const Header = ({ addTodo }) => (
  <header>
    <Title>TODO List</Title>
    <TodoTextInput
      newTodo
      onSave={(text) => {
        if (text.length !== 0) {
          addTodo(text)
        }
      }}
      placeholder="Add a new note..."
    />
  </header>
)

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
