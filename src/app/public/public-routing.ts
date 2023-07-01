import { Routes } from "@angular/router";
import { MainComponent } from "./main.component";

export default [
	{
		path: "",
		loadComponent: () =>
			import("./main.component").then((mod) => mod.MainComponent),
		children: [
			{
				path: "",
				loadComponent: () =>
					import("./pages/home/home.component").then(
						(mod) => mod.HomeComponent
					),
			},
		],
	},
] as Routes;
