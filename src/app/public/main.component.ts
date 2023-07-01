import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./shared/header/header.component";

@Component({
	selector: "app-main",
	standalone: true,
	imports: [CommonModule, HeaderComponent, RouterModule],
	template: `
		<div id="app">
			<app-header></app-header>
			<router-outlet></router-outlet>
		</div>
	`,
	styleUrls: ["main.component.scss"],
})
export class MainComponent {}
