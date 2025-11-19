import { Routes } from '@angular/router';
import { Component1 } from './component1/component1';
import { Sena } from './sena/sena';

export const routes: Routes = [
    {path: '', component : Component1},
    {path: 'sena', component : Sena},
    {path: '**', component : Component1},
];
