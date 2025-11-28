import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthDataService {
    public username: string = '';
    public phoneNumber: string = '';
    public firstName: string = '';
    public lastName: string = '';
    public isAdmin: boolean = false;

    constructor() { }

    setUserData(username: string, phoneNumber: string, firstName: string, lastName: string, isAdmin: boolean) {
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.isAdmin = isAdmin
    }

    getUserData() {
        return {
            "first_name": this.firstName,
            "last_name": this.lastName,
            "username": this.username,
            "phone_number": this.phoneNumber,
            "is_admin": this.isAdmin
        }
    }
}
