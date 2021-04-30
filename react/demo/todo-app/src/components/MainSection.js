import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'
import Checkbox  from '@material-ui/core/Checkbox'

const MainSection = ({ todosCount, completedCount, actions }) =>
  (
    <section>
      {
        !!todosCount && 
        <span>
          <Checkbox
            checked={completedCount === todosCount}
          />
          <label onClick={actions.completeAllTodos}>Complete all TODOs</label>
        </span>
      }
      <VisibleTodoList />
      {
        !!todosCount &&
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={actions.clearCompleted}
        />
      }
    </section>
  )


MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection;