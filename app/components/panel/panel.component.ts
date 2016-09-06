import {Component, Output, EventEmitter, Input} from "@angular/core";
import {PathTranslator} from "../PathTranslator";

@Component({
    selector: 'panel',
    templateUrl: PathTranslator.templatePath('panel'),
    styleUrls: [PathTranslator.stylePath('panel')],
})
export class PanelComponent {
    @Input() private content: string;
    @Input() private title: string;
    @Input() private footer: string;
    @Input() private showButton: boolean;

    @Output('buttonClicked') private buttonClickEvent: EventEmitter<any> = new EventEmitter();

    private buttonClicked(e) {
        this.buttonClickEvent.emit(e);
    }
}