import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Observable, Subject, of } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class ModalService {
	isVisible = true;

	constructor() {
		window.addEventListener("keydown", (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				this.close();
			}
		});
	}

	show(): void {
		this.isVisible = true;
	}

	close(): void {
		this.isVisible = false;
	}
}
