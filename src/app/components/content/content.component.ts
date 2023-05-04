import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-body-content',
	standalone: true,
	imports: [NgbNavModule, NgbNavModule],
	templateUrl: './content.component.html',
	styleUrls: ['./style.css']
})
export class Content {
	
}