import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaSignInAlt,
  FaUser,
  FaCircle,
  FaPowerOff,
} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Nav } from './styled';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

export default function NavBar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
    toast.info('Você fez logout.');
  };
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/register">
        <FaUser size={20} />
      </Link>
      {isLoggedIn ? (
        <Link to="/logout" onClick={handleLogout}>
          <FaPowerOff size={21} />
        </Link>
      ) : (
        <Link to="/login">
          <FaSignInAlt size={22} />
        </Link>
      )}

      {isLoggedIn && <FaCircle size={22} color="lightgreen" />}
    </Nav>
  );
}
