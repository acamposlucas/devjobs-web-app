import { Routes } from "@angular/router";

export const ROUTES: Routes = [
	{
		path: "",
		loadComponent: () =>
			import("./app.component").then((mod) => mod.AppComponent),
	},
];
