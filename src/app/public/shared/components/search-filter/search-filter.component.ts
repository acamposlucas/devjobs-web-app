import { Component, TemplateRef, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DialogComponent } from "src/app/shared/components/dialog/dialog.component";
import { ModalService } from "src/app/shared/services/modal.service";

@Component({
	selector: "app-search-filter",
	standalone: true,
	imports: [CommonModule, DialogComponent],
	templateUrl: "./search-filter.component.html",
	styleUrls: ["./search-filter.component.scss"],
})
export class SearchFilterComponent {
	modalService = inject(ModalService);

	showDialog(): void {
		this.modalService.show();
	}
}
