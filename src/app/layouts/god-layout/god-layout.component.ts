import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
//import {PostService} from '../../services/post.service';
import {Subscription} from 'rxjs';
import { AddTeamComponent } from 'src/app/god/add-team/add-team.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TeamService } from 'src/app/services/team/team.service';
import { UserService } from 'src/app/services/user/user.service';
import { ActionEvent, TeamActionsTypes } from 'src/app/state/team.state';
//import {AuthService, UserData} from '../../services/auth.service';
import { io } from 'socket.io-client';

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
  teamList: any[]=[];
  playerList:any[] = new Array();
  firstName:any;
  lastName:any;
  socket:any;

  constructor(public _authService: AuthService,
              public dialog: MatDialog,
              private _router: Router,
              private _snackBar: MatSnackBar,
              private _userService: UserService,
              private _teamService: TeamService
            ) {
               
  }

  async ngOnInit(): Promise<void> {

  
   this.getUserTeam();
   this.getUserCredintials();
   this.getMessages();
}



/**************Socket test **************** */

getMessages() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connection');
}
  
/****************************** */




getUserCredintials()
{
   this.firstName = localStorage.getItem('first_Name');
   this.lastName = localStorage.getItem('last_Name');

}

  
  getUserTeam()
  {
    this._teamService.getTeam().subscribe(response => {
      console.log("team list >>>",response[0].team.teamId)
       this.teamList = response[0].team.teamId;
       this.playerList = response[0].team.teamId.userId;
       const data:any[] = response[0].team.teamId;
       data.filter(
        (p) => {
           p.userId
           console.log('pppp', p.userId)
           this.playerList = (p.userId) 
           console.log("team list222 >>>",this.playerList)
        },
        
       )
      

      // this.playerList = response[0].team.teamId.userId;
      // console.log("team list222 >>>",this.playerList)
       /*
      response[0].team.teamId.map((item:any) => 
        item.map((p:any) =>  this.playerList = p )
       
        );
       
        */
      /*
      const array = response[0].team.teamId;
      console.log("array>>>",array)
      array.map((item:any[]) => {
        console.log("item userId>>>",item)
        this.playerList.push(item);
       console.log("team list222 >>>",this.playerList)
      }
        
        
        )
       */
      
    })
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
    
   // console.log("list first>>",list)
    const dialogRef = this.dialog.open(AddTeamComponent, {
      width: '600px',
      height:'600px',
      data:{
      
      }
    });
    /* get*/
    
    dialogRef.afterClosed().subscribe(result => {
      console.log("data from dialog add team >>>", result)
   

      let nbEq = result.nb;
      let listLenght = result.player.length;
      if(nbEq == listLenght)
      {
         console.log("formulaire valider")
        
         
          let TeamData = {
            "name": result.name,
            "nbPlayer": result.nb,
            "userId": result.player
          }
          
          this._teamService.addTeam(TeamData).subscribe(resp => {
            console.log("response >>>", resp)
  
  
            this._snackBar.open("Votre equipe est creer avec success",'', {
              duration: 4000,
              verticalPosition: 'top',
              horizontalPosition: 'end',
              panelClass: ['mat-toolbar','mat-primary']
          });
  
          
          }, err => {
            this._snackBar.open("Utilisateur ne pas creer "+ `${err.error}`,'', {
              duration: 4000,
              verticalPosition: 'top',
              horizontalPosition: 'end',
              panelClass: ['mat-toolbar','mat-warn']
          });
          })
          
         
      }else{
          console.log("formulaire non valider")
          this._snackBar.open(" Nombre des jouers invalide ",'', {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'end',
            panelClass: ['mat-toolbar','mat-warn']
        });
      }
    })


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


  gotohome()
  {
    this._router.navigate(['/home'])
  }


  gotoProfile()
  {
    this._router.navigate(['/Profile'])
  }


}
