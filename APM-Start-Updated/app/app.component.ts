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

import { Component } from '@angular/core';
import { ProductListComponent } from './products/product-list.component';  // step 1 import directive
import { TestComponent} from './test/test.component';

@Component ({
    selector: 'pm-app', // step 2 add directive selector <pm-products></pm-products>
    template: `
    <div class="app__component">
        <h1>{{pageTitle}}</h1>
        <!--<pm-test></pm-test> -->
        <pm-products></pm-products> 
    </div>    
    `,
    directives: [ProductListComponent, TestComponent] //step3 include directive

})

export class AppComponent {
    pageTitle: string = 'Acme Product Managment';
}