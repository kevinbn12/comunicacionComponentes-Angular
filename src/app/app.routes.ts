import { Routes } from '@angular/router';
import { Sena } from './sena/sena';

export const routes: Routes = [
    {path: 'sena', component : Sena},
    {path: '**', component : Sena},
];
