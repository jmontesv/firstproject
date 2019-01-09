import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {
    loggedIn: boolean;
    constructor() {
        this.loggedIn = false;
    }

    isAutenticated() {
    const promiseLog  = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedIn);
            }, 800);
        });
        return promiseLog;
    }

    login() { this.loggedIn = true;
}
    logout() { this.loggedIn = false; }
}
