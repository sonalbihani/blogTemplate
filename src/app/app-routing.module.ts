import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"post/:id",
    component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
