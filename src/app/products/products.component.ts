import { Component, OnInit } from '@angular/core'

@Component({
    selector : 'app-products',
    templateUrl : './products.component.html',
    styleUrls : ["./products.component.scss"]
})
export class productsComponent implements OnInit{
    isDisabled : boolean = true ;
    isDisabledremove : boolean = true ;
    isDisableddelete : boolean = true ;
    productStatus : string = ' Your Cart is Empty ';
    noOfProducts : number = 0;
    searchProductName! : string ;
    isProductavailable: boolean = true;
    

    ngOnInit(): void {
        console.log('product in it!');
        setTimeout(()=>{
            this.isDisabled = false;
            this.isDisabledremove = false;
            this.isProductavailable = Math.random() >= .5 ? true : false
        }, 1000)

       
    }

    onProductSearch(eve : Event) {
        let val = (eve.target as HTMLInputElement).value;
        this.searchProductName = val;
        // console.log(val)
    }

    getProductStatus(): void{
        // console.log('button has been clicked!');
        this.noOfProducts++;
        if(this.noOfProducts === 1){
            this.productStatus = `${this.noOfProducts} Product is added to your Cart`;
        }else {
            this.productStatus = `${this.noOfProducts} Products are added to your Cart`;
        }

        if(this.noOfProducts >= 0){
            this.isDisabledremove = false
        }else{
            this.isDisabledremove = true
        }

        if(this.noOfProducts > 0){
            this.isDisableddelete = false;
        }else{
            this.isDisableddelete = true;
        }
    }

    removeProductStatus(){
        let product= 0;
        if(this.noOfProducts > 0){
            this.noOfProducts--;
            this.noOfProducts += product;
            
        }else{
           this.isDisabledremove = true;
        };

        if(this.noOfProducts > 0){
            this.isDisabledremove = false;
        }else{
            this.isDisabledremove =true;
        }

        
        if(this.noOfProducts===1 || this.noOfProducts === 0){
            this.productStatus = `${this.noOfProducts} Product is added to your Cart`
        }else{
            this.productStatus = `${this.noOfProducts} Products are added to your Cart`
        };
        // if(this.noOfProducts <= 0){
        //     this.isDisabledremove = true;
        // }else{
        //     this.isDisabledremove = false;
        // };
    }

    emptyProductStatus(){
        let result = 0;
       this.noOfProducts =0;
       
       this.productStatus = 'Your Cart is Empty';

       if(this.noOfProducts > 0){
        this.isDisableddelete = false;
    }else{
        this.isDisableddelete = true;
    }
    }

    public getBgColor(){
        if(this.isProductavailable){
            return 'lightBlue'
        }else{
            return "transparent"
        }
    }
}