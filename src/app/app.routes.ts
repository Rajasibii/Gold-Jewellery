import { Routes,} from '@angular/router';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Home } from './home/home';

export const routes: Routes = [
  {path:'',component:Home},
  { path: 'contact', component: Contact },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
];
