import { Routes } from "@angular/router";

export const ROUTES: Routes = [
	{
		path: "",
		loadChildren: () => import("./public/public-routing"),
	},
];
