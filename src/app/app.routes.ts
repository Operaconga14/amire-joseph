import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'contact',
        loadComponent: () => import('./components/contact/contact.component').then((m) => m.ContactComponent)
    },
    {
        path: 'portfolio',
        loadComponent: () => import('./components/portfolio/portfolio.component').then((m) => m.PortfolioComponent)
    },
    {
        path: 'projects',
        loadComponent: () => import('./components/projects/projects.component').then((m) => m.ProjectsComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./components/about/about.component').then((m) => m.AboutComponent)
    }
];
