import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { ItemsComponent } from './items/items.component';
import  {ProfileComponent}  from './profile/profile.component';
import {UpdateProfileComponent} from './update-profile/update-profile.component'
import { SignupComponent } from './signup/signup.component'
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { FormStoreComponent } from './form-store/form-store.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { OnePostComponent } from './one-post/one-post.component';
const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'contacts',
    component: ContactComponent,
  },
  {
    path: 'update-profile',
    component: UpdateProfileComponent,
  },
  {
    path: 'addPost',
    component: AddPostComponent,
  },
  {
    path: 'updatePost',
    component: UpdatePostComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'post-details',
    component: OnePostComponent,
  },
  {
    path: 'items',
    component: ItemsComponent,
  },
  {
    path: 'form-store',
    component: FormStoreComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
