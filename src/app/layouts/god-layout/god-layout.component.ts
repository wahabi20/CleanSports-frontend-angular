import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import {PostService} from '../../services/post.service';
import {Subscription} from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
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
              private _router:Router,
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
  
  gototeams()
  {
    this._router.navigate(['/teams']);
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
