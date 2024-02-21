/* import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Subject } from 'rxjs';
import { User } from '../../interface';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { serverTimestamp } from '@firebase/firestore';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: Subject<any> = new Subject<any>();

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, @Inject(PLATFORM_ID) private platformId: object) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData.next(user);
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        this.userData.next(null)
        localStorage.removeItem('user');
      }
    })
  }

  async login(email: string, password: string): Promise<any> {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  register(user: any): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password).then((res) => {
      this.setUserData(res.user, user.name, user.username);
    })
  }

  setUserData(user: any, name?: string, username?: string): Promise<any> {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: name || '',
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      username: username || '',
      createdAt: new Date()
    }

    return userRef.set(userData, {
      merge: true
    })
  }

  signOut(): void {
    this.afAuth.signOut().then((res) => {
      localStorage.removeItem('user');
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null;
  }

  get loggedInUserId(): string {
    const userData = localStorage.getItem('user');
    if (userData) {
      return JSON.parse(userData).uid
    }
    return '';
  }


} */


import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Subject } from 'rxjs';
import { User } from '../../interface';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { serverTimestamp } from '@firebase/firestore';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: Subject<any> = new Subject<any>();

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, @Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      this.afAuth.authState.subscribe((user) => {
        if (user) {
          this.userData.next(user);
          localStorage.setItem('user', JSON.stringify(user));
        } else {
          this.userData.next(null)
          localStorage.removeItem('user');
        }
      })
    }
  }

  async login(email: string, password: string): Promise<any> {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  register(user: any): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password).then((res) => {
      this.setUserData(res.user, user.name, user.username);
    })
  }

  setUserData(user: any, name?: string, username?: string): Promise<any> {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: name || '',
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      username: username || '',
      createdAt: new Date()
    }

    return userRef.set(userData, {
      merge: true
    })
  }

  signOut(): void {
    this.afAuth.signOut().then((res) => {
      if (isPlatformBrowser(this.platformId)) {
        localStorage.removeItem('user');
      }
    })
  }

  get isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const user = JSON.parse(localStorage.getItem('user')!);
      return user !== null;
    }
    return false;
  }

  get loggedInUserId(): string {
    if (isPlatformBrowser(this.platformId)) {
      const userData = localStorage.getItem('user');
      if (userData) {
        return JSON.parse(userData).uid
      }
    }
    return '';
  }
}
