import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    loadComponent: () => import("./post/post.component").then((c) => c.PostComponent)
  }
];
