import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Login } from './Login';
import { LoginService } from './login.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginService]
})
export class LoginComponent {

    login = new Login();

    users: any[];
    valid = true;
    isLoggedIn = 'false';

    constructor(private router: Router, private loginService: LoginService) {
        document.getElementById('login').style.display = 'none';
       // Makes a service call to fetch users data from backend
        this.loginService.getUsers()
            .subscribe(users => this.users = users);
    }

    // Invoked when user clicks submit in login form
    // Validates the credentials with the fetched data from the database
    onSubmit() {
        this.valid = true;
        const name = this.login.userName;
        sessionStorage.setItem('username', this.login.userName);
        const password = this.login.password;
        const user = this.users.filter(currUser => currUser.userName === name && currUser.password === password)[0];
        if (user) {
            this.isLoggedIn = 'true';
            sessionStorage.setItem('isLoggedIn', this.isLoggedIn);
            this.router.navigate(['/products']);
        } else {
            this.isLoggedIn = 'false';
            sessionStorage.setItem('isLoggedIn', this.isLoggedIn);
            this.valid = false;
        }
    }
}
