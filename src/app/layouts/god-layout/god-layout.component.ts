import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
//import {PostService} from '../../services/post.service';
import {Subscription} from 'rxjs';
import { AddTeamComponent } from 'src/app/god/add-team/add-team.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
//import {AuthService, UserData} from '../../services/auth.service';

@Component({
  selector: 'app-god-layout',
  templateUrl: './god-layout.component.html',
  styleUrls: ['./god-layout.component.scss']
})
export class GodLayoutComponent implements OnInit {

  images: any[] = [
    'https://images-na.ssl-images-amazon.com/images/I/51DR2KzeGBL._AC_.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg',
    'https://torange.biz/photofx/93/8/light-vivid-colors-fragment-love-background-rain-fall-cover-93412.jpg',
    'https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641_960_720.jpg',
    'https://c0.wallpaperflare.com/preview/956/761/225/5be97da101a3f.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9a/Swepac_FB_465%2C_RV70%2C_with_passing_lorry.jpg'
  ];
  subs: Subscription[] = [];
  posts: any[] = [];
  panelOpenState = false;


  constructor(public _authService: AuthService,
              public dialog: MatDialog,
              private _router: Router,
              private _snackBar: MatSnackBar,
              private _userService: UserService
            ) {
               
  }

  async ngOnInit(): Promise<void> {

    
    /*
    this.subs.push(this.postService.getAllPosts().subscribe(async (posts) => {
      this.posts = posts;
      console.log(posts);
      
    }));

    this.subs.push(this.authService.CurrentUser().subscribe(user => {
      this.user = user;
      console.log(user);
    }));
*/
  }

  gotolistUser()
  {
    this._router.navigate(['/players']);
  }
  
  gotomarket()
  {
    this._router.navigate(['/marketplace']);
  }
  gotostars()
  {
    this._router.navigate(['/stars']);
  }
  gototeams()
  {
    this._router.navigate(['/teams']);
  }

  gotoDashboard()
  {
    this._router.navigate(['/Dashboard']);
  }
  /* dialog  */
  gotoAddTeam()
  {
 
    const dialogRef = this.dialog.open(AddTeamComponent, {
      width: '990px',
      height:'600px',
      data:{
      
      }
    });
    /* get*/
    dialogRef.afterClosed().subscribe(result => {
      console.log("data from dialog >>>", result)
      if(result.isAdmin == "1")
      {
         result.isAdmin = true;
      }else{
        result.isAdmin = false;
      }

        let dataUser = {
          "first_Name": result.first_Name,
          "last_Name": result.last_Name,
          "email": result.email,
          "password": result.password,
          "password_Confirm": result.passwordConfirme,
          "address":result.address,
          "dateOfBirth": result.date,
          "phone_Number":result.phone,
          "isAdmin":result.isAdmin,
          "pts": result.pts
        }
       
      this._userService.addUser(dataUser).subscribe(resp =>{
          
               console.log('resp of user dialog>>>', resp);
               this._snackBar.open("user created sucessfully",'', {
                duration: 2000,
               
                panelClass: ['mat-toolbar','mat-accent']
            });
            
      

      }, err => {
       
                console.log("this error>>>", err.error)
                this._snackBar.open("Utilisateur ne pas creer "+ `${err.error}`,'', {
                  duration: 3000,
                 
                  panelClass: ['mat-toolbar','mat-warn']
              });
            })


     


     
    });


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

  gotohome()
  {
    this._router.navigate(['/home'])
  }

}
