import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  signOut,
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private router: Router, private auth: Auth) {}

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password).then(
      () => {
        this.router.navigate(['/']);
      }
    );
  }

  signIn({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password).then(
      () => {
        return this.router.navigate(['/']);
      }
    );
  }

  signOut() {
    return signOut(this.auth).then(() => {
      this.router.navigate(['/authentication']);
    });
  }

  getUserToken() {
    return this.auth.currentUser?.getIdToken();
  }

  getSignedInUser() {
    return this.auth.currentUser;
  }
}
