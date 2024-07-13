import { Routes } from '@angular/router';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
export const routes: Routes = [
    {
        path:'',
        component: ListaArticulosComponent
    },
    {
        path: 'create-post',
        component: CreatePostComponent
    }
];
