import { HttpErrorResponse } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
//import {PostService} from '../../services/post.service';
import {Subscription} from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

//import {AuthService, UserData} from '../../services/auth.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {



  dataLoaded: boolean = false;
  pageContacts: any;
  motCle:string="";
  motClerandomPages:string="";
  currentPage:number=0;
  currentRandomPage:number=0;
  currentPerPage:number=5;
  currentrandomPerPage:number=8;
  limit:number=5;
  limitrandom:number=8;
  pages = new Array();
  randomPages = new Array();
  user:boolean=true;
  randompageContacts: any;
  datarandomLoaded: boolean = false;



  constructor(public _us: UserService,
              private _router:Router) {
  }

   ngOnInit():void {
     /** get list of players sortig by pts and limit 5 */
    this.dataLoaded = true ;
    this._us.getUsers(this.motCle, this.currentPage , this.limit).subscribe((response : any[]) => {
    response.map(res => {
      this.pageContacts = res.result;

      this.pages= new Array(res.total_pages);
      console.log(this.pageContacts);
      
   })
   this.dataLoaded = false;
     
 }, err => {
    console.log(err);
    if(err instanceof HttpErrorResponse){
       if(err.status === 401) {
          this._router.navigate(['/auth'])
       }
    }
     })

      /** get list of random players and limit 8 */
      this.datarandomLoaded = false ;
      this._us.geRandomUsers(this.motClerandomPages, this.currentRandomPage , this.limitrandom).subscribe((response : any[]) => {
      response.map(res => {
        this.randompageContacts = res.result;
  
        this.randomPages= new Array(res.total_pages);
        console.log(this.randompageContacts);
        
     })
     this.datarandomLoaded = true;
       
   }, err => {
      console.log(err);
      if(err instanceof HttpErrorResponse){
         if(err.status === 401) {
            this._router.navigate(['/auth'])
         }
      }
       })
  }




/********************** Start work flow search best players **************************/
chercher(){
  this.doSearch();
}
/** do search function to get players sortig by pts and limit 5 */
doSearch(){

    this.dataLoaded = true ;
    this._us.getUsers(this.motCle,this.currentPage, this.limit).subscribe((response : any[]) => {
       response.map(res => {
        this.dataLoaded = false;
         this.pageContacts = res.result;
         console.log("totale pages>>>",Math.ceil(res.total_pages) );
         this.pages= new Array(res.total_pages);
        
         
      })
     
        
    }, err => {
      this.dataLoaded = false;
       console.log(err);
    })
  
}

gotoHome()
  {
    this._router.navigate(['god/home']);
  }

gototeams()
  {
    this._router.navigate(['god/teams']);
  }

goToNextPage(){
    this.currentPage = ++this.currentPage;
    this.doSearch();
   }

gotoPage(i:number){
    this.currentPage=i;
    this.doSearch();
  }

goToPreviousPage(){
    this.currentPage = --this.currentPage;
    this.doSearch();
   }
/********************** End work flow search best players **************************/







 /********************** Start work flow search random players  and limit 8**************************/  
 RandomSearsh(){
  this.doRandomSearch();
}

goToNextRandomPage(){
  this.currentRandomPage = ++this.currentRandomPage;
   this.doRandomSearch()
 }
 
gotoRandomPage(i:number){
  this.currentRandomPage=i;
  this.doRandomSearch();
}

 doRandomSearch(){

  this.datarandomLoaded = false ;
  this._us.geRandomUsers(this.motClerandomPages,this.currentRandomPage, this.limitrandom).subscribe((response : any[]) => {
     response.map(res => {
       this.randompageContacts = res.result;
       console.log("totale pages>>>",Math.ceil(res.total_pages) );
       this.randomPages= new Array(res.total_pages);
      
       
    })
    this.datarandomLoaded = true;
      
  }, err => {
     console.log(err);
  })

}

 goToPreviousRandomPage()
 {
  this.currentRandomPage = --this.currentRandomPage;
  this.doRandomSearch();
 }

  /********************** Start work flow search random players **************************/

}
