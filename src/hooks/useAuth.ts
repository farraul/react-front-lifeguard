import React from 'react';
import jwtService from 'src/auth/jwtService';
import { UserInfo } from 'src/models/user/user';

type typeAuth = 'login' | 'register';

interface LoginData {
  email: string;
  password: string;
}

const useAuth = (type: typeAuth) => {
  const onSubmit = (user: UserInfo | LoginData) => {
    if (type === 'login') {
      const { email, password } = user as LoginData;

      jwtService
        .signInWithEmailAndPassword(email, password)
        .then((_user) => {
          // No need to do anything, user data will be set at app/auth/AuthContext
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    } else {
      jwtService.createUser(user);
    }
  };

  return { onSubmit };
};

export default useAuth;
