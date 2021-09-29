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
  currentPage:number=0;
  currentPerPage:number=5;
  limit:number=8;
  pages = new Array();
  user:boolean=true;
  



  subs: Subscription[] = [];
  posts: any[] = [];


  constructor(public _us: UserService,
              private _router:Router) {
  }

   ngOnInit():void {
    this.dataLoaded = false ;

    this._us.getUsers(this.motCle, this.currentPage , this.limit).subscribe((response : any[]) => {
    response.map(res => {
      this.pageContacts = res.result;

      this.pages= new Array(res.total_pages);
      console.log(this.pageContacts);
      
   })
   this.dataLoaded = true;
     
 }, err => {
    console.log(err);
    if(err instanceof HttpErrorResponse){
       if(err.status === 401) {
          this._router.navigate(['/auth'])
       }
    }
 })
   
  }




  
chercher(){
  this.doSearch();
}

  doSearch(){

    this.dataLoaded = false ;
    this._us.getUsers(this.motCle,this.currentPage, this.limit).subscribe((response : any[]) => {
       response.map(res => {
         this.pageContacts = res.result;
         console.log("totale pages>>>",Math.ceil(res.total_pages) );
         this.pages= new Array(res.total_pages);
        
         
      })
      this.dataLoaded = true;
        
    }, err => {
       console.log(err);
    })
  
  }



  gotoPerPage(perPage:number){
    console.log("perpage>>>", perPage)
    this.currentPerPage=perPage;
    this.limit=perPage;
    this.doSearch();
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
  

   onDeleteContact(user:any){
     /*
    let confirm = window.confirm("Est vous sure ?")
    if(confirm){
       console.log("userdddd>>>",user)
     this.cs.deleteContact(user._id).subscribe(resp=>{
     console.log(resp)
     this.pageContacts.splice(this.pageContacts.indexOf(user),1);      
   }, err => {
      console.log(err)
     if(err instanceof HttpErrorResponse){
       if(err.status === 401) {
          this.router.navigate(['auth/login'])
       }
    }
   })
    }
    */
  }
 
  onEditContact(id:string){
    //this.router.navigate(['users/editContact',id]);
   
    }
   

    onActive(data:any){
  /*
      this.cs.onActiveContact(data).subscribe(resp=> {
        console.log(resp)
        this.doSearch();
      }
      , err =>{
         console.log(err)
         if(err instanceof HttpErrorResponse){
           if(err.status === 401) {
              this.router.navigate(['auth/login'])
           }
        }
      })
      */
    }




  postMessage(form: NgForm): void {
    /*
    const {message} = form.value;
    this.postService.postMessage(message,
      `${this.user.firstName} ${this.user.lastName}`,
      {
        avatar: this.user.avatar,
        lastName: this.user.lastName,
        firstname: this.user.firstName
      },
    );
    form.resetForm();
    */
  }

  logout(): void {
    //this.authService.Logout();
  }

}
