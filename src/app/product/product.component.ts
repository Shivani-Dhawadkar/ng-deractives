import { Component, OnInit } from "@angular/core";

@Component({
    selector : "app-product",
templateUrl : "./product.component.html",
styleUrls : [ "./product.component.scss"]
})
export class productComponent implements OnInit{
    
    pName : string = "Samsung";
    pId : number = 1 ;
    pStatus : string = "in-transition";
    
        constructor(){

        }
    ngOnInit(): void {
       console.log('product in it?')
    }

    
    public getProductId(){
        return this.pId
    }
}
