import { useReducer, useCallback } from 'react'

export const actionTypes = {
  INPUT_CHANGE: 'INPUT_CHANGE',
  SET_DATA: 'SET_DATA'
}

export const formReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INPUT_CHANGE: {
      let formIsValid = true
      Object.keys(state.inputs).forEach(inputId => {
        const input = state.inputs[inputId]
        if (input) {
          if (inputId === action.inputId)
            formIsValid = formIsValid && action.isValid
          else formIsValid = formIsValid && input.isValid
        }
      })
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            value: action.value,
            isValid: action.isValid
          }
        },
        isValid: formIsValid
      }
    }
    case actionTypes.SET_DATA:
      return {
        inputs: action.inputs,
        isValid: action.formIsValid
      }
    default:
      return state
  }
}

const useForm = (initialInputs, initialFormValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity
  })

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: actionTypes.INPUT_CHANGE,
      value,
      isValid,
      inputId: id
    })
  }, [])

  const setFormData = useCallback((inputData, formValidity) => {
    dispatch({
      type: actionTypes.SET_DATA,
      inputs: inputData.inputId,
      formIsValid: formValidity
    })
  }, [])

  return [formState, inputHandler, setFormData]
}

export default useForm
