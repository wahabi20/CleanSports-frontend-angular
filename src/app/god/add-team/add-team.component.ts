import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {


  toppingList: string[] = ['6', '7', '8', '9', '10', '11'];
  options: string[] = ['Angular','React', 'Vue'];
  objectOptions = [
     {name:'Angular'},
     {name:'Angular Material'},
     {name:'React'},
     {name:'Vue'}
  ]

  fruits: string[] = [];
  selectable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  removable = true;
  fruitCtrl = new FormControl();



  filteredOptions!: Observable<string[]>;
  myControl = new FormControl();

  @ViewChild('fruitInput')
  fruitInput!: ElementRef<HTMLInputElement>;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

     this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
     )
     console.log("mycontrol>>>",this.myControl);
     console.log("filtredOptins>>>",this.filteredOptions);
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
      this.fruits.push(value);
    }
  }


private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();
  return this.options.filter(option => 
    option.toLowerCase().includes(filterValue))
}

remove(fruit: string): void {
  const index = this.fruits.indexOf(fruit);

  if (index >= 0) {
    this.fruits.splice(index, 1);
  }
}


selected(event: MatAutocompleteSelectedEvent): void {
  this.fruits.push(event.option.viewValue);
  this.fruitInput.nativeElement.value = '';
  this.fruitCtrl.setValue(null);
}

  displayFn(subject:any)
  {
     return subject ? subject.name : undefined;
  }
  



  onAddTeam()
  {
    console.log("data from addTeamForm", this.addTeamForm.value.player)
  }
}
