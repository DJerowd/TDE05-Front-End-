import React from 'react';
import './UserInfo.css';

const UserInfo = ({ name, birthday, email }) => {
  return (
    <div className="info">
      <p className="infoText">Nome: {name},</p>
      <p className="infoText">Data de nascimento: {birthday},</p>
      <p className="infoText">E-mail: {email}</p>
    </div>
  );
};

export default UserInfo;
