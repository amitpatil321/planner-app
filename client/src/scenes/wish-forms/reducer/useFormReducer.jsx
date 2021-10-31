import React from 'react';
import { getDateMonthYear } from '../../../services/dateTime'

const initialState = {
    title: "",
    genre: "",
    isCompleted: false,
    isFavorite: false,
    isArchived: false,
    createdDate: getDateMonthYear(new Date()),
    authorId: "Rahul",
  }

function reducer(state, action) {
  switch (action.type) {
    case 'edit-title':
      return {...state, title: action.payload};
    case 'edit-genre':
      return {...state, genre: action.payload};
    case 'toggle-favorite':
      return {...state, isFavorite: !state.isFavorite};
    case 'add-list':
      return {
        ...state,
        list: [...state.list, (action.payload)]
      };
    case 'edit-list':
      return {
        ...state,
        list: action.payload
      };
    case 'edit-description':
      return {
        ...state,
        description: action.payload
      };
    case 'toggle-formtype':
      return {
        ...action.payload
      };
    default:
      return state;
  }
}

function useFormReducer(formType) {
  const [formData, dispatch] = React.useReducer(reducer, initialState, () => {
    if(formType === 'list') {
      return {
        ...initialState,
        ...{
          hasBucket: true,
          list : []
        }
      }
    } else {
      return {
        ...initialState,
        ...{
          hasBucket: false,
          description : ""
        }
      }
    }
  });

  React.useEffect(() => {
    let newFormData = {}
    if(formType === 'list') {
      newFormData = {
        ...initialState,
        ...{
          hasBucket: true,
          list : []
        }
      }
    } else {
      newFormData = {
        ...initialState,
        ...{
          hasBucket: false,
          description : ""
        }
      }
    }
    dispatch({
      type: 'toggle-formtype',
      payload: newFormData
    })
  }, [formType]);

  return {
    formData,
    dispatch
  }
}

export default useFormReducer;