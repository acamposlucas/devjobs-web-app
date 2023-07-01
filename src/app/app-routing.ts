import { Routes } from "@angular/router";
import { MainComponent } from "./public/main.component";

export const ROUTES: Routes = [
	{
		path: "",
		loadChildren: () => import("./public/public-routing"),
	},
];
