import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_1_REQUEST: {
      return state;
    }

    case types.BOTAO_1_SUCCESS: {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BOTAO_1_FAILURE: {
      return state;
    }
    default:
      return state;
  }
}
