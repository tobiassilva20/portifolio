import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

@Component({
	selector: 'app-body',
	standalone: true,
	imports: [NgbNavModule, NgbNavModule,  RouterModule],
	templateUrl: './body.html',
	styleUrls: ['./style.css']
})
export class Body {
	
}