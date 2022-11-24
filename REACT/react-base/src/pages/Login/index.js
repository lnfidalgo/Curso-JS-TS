import React from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as actions from '../../store/modules/example/actions';
// import axios from '../../services/axios';

export default function Login() {
  /* React.useEffect(() => {
    async function getApi() {
      const response = await axios.get('/alunos');
      const { data } = response;
      console.log(data);
    }         ASSIM QUE SE FAZ UMA REQ NA API
    getApi();
  }, []);
*/
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(actions.clicaBotaoRequest());
  }

  toast.success('Oie');
  return (
    <Container>
      <Title>
        Login
        <small>To testando REACT po.</small>
      </Title>
      <Paragrafo>Uhuuuuuulll</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
