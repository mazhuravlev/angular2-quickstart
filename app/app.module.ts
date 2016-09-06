import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./components/app/app.component";
import {routing} from "./routing";
import {IndexComponent} from "./components/index/index.component";
import {AboutComponent} from "./components/about/about.component";
import {PanelComponent} from "./components/panel/panel.component";


@NgModule({
    imports: [BrowserModule, routing],
    declarations: [AppComponent, IndexComponent, AboutComponent, PanelComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}