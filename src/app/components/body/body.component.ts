import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-body',
	standalone: true,
	imports: [NgbNavModule, NgbNavModule],
	templateUrl: './body.html',
	styleUrls: ['./style.css']
})
export class Body {
	
}