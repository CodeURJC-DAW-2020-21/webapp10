import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Purchase } from 'src/app/models/purchase.model';
import { PurchasesService } from 'src/app/services/purchases.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  template: `

    <h2>Purchases</h2>
    <ul class="items">
      <li *ngFor="let purchase of purchases"style="color: white">
      {{purchase.firstName}}
        <a [routerLink]="['/purchases', purchase.id]">{{purchase.id}}</a>
      </li>
    </ul>
    <!-- <button *ngIf="loginService.isLogged()" (click)="newPurchase()">New book</button> -->
  `,
  selector: "purchase-list"
})
export class PurchaseListComponent implements OnInit {

  page: any;
  purchases: Purchase[];


  constructor(private router: Router, private service: PurchasesService, public loginService: LoginService) { }

  ngOnInit() {

    if(this.loginService.isAdmin()){
      this.service.getPurchasesAdmin(0).subscribe(
        purchases => {
          this.purchases = purchases;
          console.log(this.purchases);
        },
        error => console.log(error)
      );
      }else{
        this.service.getPurchasesUser(this.loginService.user.id,0).subscribe(
          purchases => {
            this.purchases =purchases;
            console.log(this.purchases);
          },
        error => console.log(error)
        );
      }
    
  }

  newPurchase() {
    this.router.navigate(['/purchases/new']);
  }
}
