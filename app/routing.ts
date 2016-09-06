import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {IndexComponent} from "./components/index/index.component";
import {AboutComponent} from "./components/about/about.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent},
    {path: 'about', component: AboutComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);