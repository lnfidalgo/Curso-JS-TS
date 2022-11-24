import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Nav } from './styled';

export default function NavBar() {
  const botaoClicado = useSelector((state) => state.anyName.botaoClicado);
  return (
    <Nav>
      <Link to="/">
        <FaHome size={20} />
      </Link>
      <Link to="/login">
        <FaUser size={20} />
      </Link>
      <Link to="/teste">
        <FaSignInAlt size={20} />
      </Link>
      {botaoClicado ? 'Clicado' : 'Não clicado'}
    </Nav>
  );
}
