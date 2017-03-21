// import { Component } from '@angular/core';
//
// @Component({
//     selector: 'pm-app',
//     template: `
//     <div>
//         <nav class='navbar navbar-default'>
//             <div class='container-fluid'>
//                 <a class='navbar-brand'>{{pageTitle}}</a>
//                 <ul class='nav navbar-nav'>
//                     <li><a [routerLink]="['/welcome']">Home</a></li>
//                     <li><a [routerLink]="['/products']">Product List</a></li>
//                 </ul>
//             </div>
//         </nav>
//         <div class='container'>
//             <router-outlet></router-outlet>
//         </div>
//      </div>
//      `
// })
// export class AppComponent {
//     pageTitle: string = 'Acme Product Management';
// }
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_list_component_1 = require('./products/product-list.component'); // step 1 import directive
var test_component_1 = require('./test/test.component');
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'Acme Product Managment';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pm-app',
            template: "\n    <div class=\"app__component\">\n        <h1>{{pageTitle}}</h1>\n        <!--<pm-test></pm-test> -->\n        <pm-products></pm-products> \n    </div>    \n    ",
            directives: [product_list_component_1.ProductListComponent, test_component_1.TestComponent] //step3 include directive
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map