import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

const TelaHome = function() {

  const LER_TODOS_USUARIOS = gql`
    query LerTodosUsuarios {
      usuarios {
        nome
        login
      }
    }
  `;

  type Usuario = {
    nome: string
    login: string
  };

  const { data, loading, error, refetch } = useQuery<{usuarios: Usuario[]}>(LER_TODOS_USUARIOS);


  return (
    <>
      <h1>Usuarios:</h1>
      {(loading) && (
        <p>Carregando...</p>
      )}
      {(error) && (
        <p>{`Erro! ${error}`}</p>
      )}
      <ul>
        {data?.usuarios.map(function(usuario, index) {
          return <li key={index}>{usuario.nome}</li>
        })}
      </ul>
      <button onClick={() => refetch()}>Recarregar</button>
    </>
  );
};

export default TelaHome;
