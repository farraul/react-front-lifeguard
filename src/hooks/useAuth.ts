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
    console.log({ user });
    if (type === 'login') {
      const { email, password } = user as LoginData;

      // if (email === '0' && password === '0') { }

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
      console.log('User created');

      // jwtService.createUser(user);
    }
  };

  return { onSubmit };
};

export default useAuth;
