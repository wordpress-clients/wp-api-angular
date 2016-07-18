import { Component } from '@angular/core';
import {
  WpApiPosts
} from '../../lib/v2/index.ts'
let config = require('../../config.json');

@Component({
  selector: 'app',
  styles: [`
    .error {
        background-color: red;
    }

    .success {
        background-color: green;
    }
  `],
  template: `
    <h2>Posts</h2>
    <div
      *ngFor="let result of posts; let name = index"
      [ngClass]="{'success': result === 'OK', 'error': result === 'FAILED'}"
      >
      {{name}}
    </div>
  `
})
export class App {
  posts: any;
  constructor(wpApiPosts: WpApiPosts) {
    console.log('wpApiPosts', wpApiPosts)

    Object.keys(config.postsMethods).map((name) => {
      let parameters = config.postsMethods[name];
      wpApiPosts[name].apply(wpApiPosts, parameters)
        .then(() => this.posts[name] = 'OK')
        .catch(() => this.posts[name] = 'FAILED');
    });
  }
}

