import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Content } from '../content/content.component';

@Component({
	selector: 'app-body',
	standalone: true,
	imports: [NgbNavModule, NgbNavModule, Content],
	templateUrl: './body.html',
	styleUrls: ['./style.css']
})
export class Body {
	
}