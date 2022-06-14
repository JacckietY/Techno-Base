import { Component, OnInit } from '@angular/core';
import { UsersService } from '@my-team/users';

@Component({
    selector: 'my-team-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    constructor(private usersService: UsersService) {}

    ngOnInit() {
        this.usersService.initAppSession();
    }
    title = 'techno-base';
}
