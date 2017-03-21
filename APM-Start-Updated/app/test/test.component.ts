/**
 * Created by zoran on 9/11/16.
 */


import { Component } from '@angular/core';

@Component ({
    selector: 'pm-test',
    templateUrl: 'app/test/test.component.html'
})

export class TestComponent {
    testTitle: string = 'Test Component';
    testSubtitle: string = 'Test Subtitle';
    testName: string = 'Zoran';
    testSurname: string = 'Markovic';
    showUser: boolean = true;

    getTitle(): string {
        return this.testTitle;
    };

    toggleUser(): void {
        this.showUser = !this.showUser;
    }
}