import { Routes } from "@angular/router";

export default [
	{
		path: "",
		loadComponent: () =>
			import("./pages/home/home.component").then(
				(mod) => mod.HomeComponent
			),
	},
] as Routes;
