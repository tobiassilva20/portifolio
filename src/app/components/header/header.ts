import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [NgbNavModule, NgbNavModule],
	templateUrl: './header.html',
	styleUrls: ['./style.css']
})
export class Header {
	
}