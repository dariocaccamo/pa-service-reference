import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    title: 'Home Page',
  },
  {
    path: 'pratiche',
    loadComponent: () => import('./features/pratiche/pratiche-lista').then((m) => m.Pratiche),
    title: 'Lista Pratiche',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/errore/pagina-non-trovata').then((m) => m.PaginaNonTrovata),
    title: 'Pagina non trovata',
  },
];
