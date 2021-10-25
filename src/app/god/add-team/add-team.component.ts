import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/model.user';
import { TeamService } from 'src/app/services/team/team.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {


  toppingList: string[] = ['6', '7', '8', '9', '10', '11'];
 

  defaultplayers: string[] = [];
  selectable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  removable = true;
  fruitCtrl = new FormControl();
  
  playerslistID:string[]=[];

  
  
  myControl = new FormControl();
  searchplayer!: User[];
  players!: User[];
 

  @ViewChild('fruitInput')
  fruitInput!: ElementRef<HTMLInputElement>;

  constructor(
    public dialogRef: MatDialogRef<AddTeamComponent>,
    private _userService: UserService,
    private fb: FormBuilder,
    private _teamService:TeamService,
    private _snackBar: MatSnackBar,
    private _router:Router
    ) { }

  ngOnInit(): void {
  
     this.getUserTeam();

     console.log("jouers >>>", this.defaultplayers[1])
    // console.log("index >>>", this.defaultplayers[0])
  
  }



  search(query:string)
  {
     this.searchplayer = (query) ? this.players.filter( players =>
       players.first_Name.toLowerCase().includes(query.toLowerCase()) ||
       players.last_Name.toLowerCase().includes(query.toLowerCase()) 
       ) 
       : this.players;
  }


  getUserTeam()
  {
    this._userService.getAllUsers().subscribe(response => {
      console.log("users names >>>",response)
       this.searchplayer = this.players = response;
    })
  }




  addTeamForm: FormGroup = this.fb.group({

    name: ['', [Validators.required, Validators.minLength(6)]],
    nb: ['', [Validators.required],],
    player: ['', [Validators.required],],
  })




  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.defaultplayers.push(value);
      console.log("liste value >>>", value)
    }
  }




remove(fruit: string): void {
  const index = this.defaultplayers.indexOf(fruit);
  console.log("feruit>>>",fruit)
  if (index >= 0) {
    this.defaultplayers.splice(index, 1);
    this.playerslistID.splice(index,1);
  }
}


selected(event: MatAutocompleteSelectedEvent): void {
  this.defaultplayers.push(event.option.viewValue);
  console.log("event option>>>", event.option)
  this.playerslistID.push(event.option.value._id)
  console.log("liste des id >>>", this.playerslistID)
  this.fruitInput.nativeElement.value = '';
  this.fruitCtrl.setValue(null);
}

  displayFn(subject:any)
  {
     return subject ? subject.first_Name : undefined;
  }
  



  onAddTeam()
  {
    console.log("data from addTeamForm", this.addTeamForm);
    console.log("liste des id from add Team >>>", this.playerslistID[0])
    console.log("liste des id from add Team >>>", this.playerslistID[1])
    let nbEq = this.addTeamForm.value.nb;
    let listLenght = this.defaultplayers.length;
    if(nbEq == listLenght)
    {
       console.log("formulaire valider")
      
        let id = localStorage.getItem('id')
        let TeamData = {
          "name": this.addTeamForm.value.name,
          "nbPlayer": this.addTeamForm.value.nb,
          "userId": this.playerslistID
        }
        
        this._teamService.addTeam(TeamData).subscribe(resp => {
          console.log("response >>>", resp)

          this._snackBar.open("Votre equipe est creer avec success",'', {
            duration: 2000,
           
            panelClass: ['mat-toolbar','mat-accent']
        });


         // this._router.navigate(['/home']);
           this.dialogRef.close();

        }, err => {
          this._snackBar.open("Utilisateur ne pas creer "+ `${err.error}`,'', {
            duration: 3000,
           
            panelClass: ['mat-toolbar','mat-warn']
        });
        })
        
       
    }else{
        console.log("formulaire non valider")
        this._snackBar.open(" Nombre des jouers invalide ",'', {
          duration: 3000,
         
          panelClass: ['mat-toolbar','mat-warn']
      });
    }
  }
}
