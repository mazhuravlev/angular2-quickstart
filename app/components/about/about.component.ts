import {Component} from "@angular/core";
import {PathTranslator} from "../PathTranslator";

@Component({
    templateUrl: PathTranslator.templatePath('about'),
    styleUrls: [PathTranslator.stylePath('about')],
})
export class AboutComponent {
    private messages = [];
    private panels = [1];

    private panelButtonClicked(panelName) {
        this.messages.push('Button clicked in PanelComponent ' + panelName);
    }

    private addPanel() {
        this.panels.push(this.panels[this.panels.length - 1] + 1);
    }
}