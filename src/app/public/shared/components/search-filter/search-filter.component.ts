import { Component, TemplateRef, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DialogComponent } from "src/app/shared/components/dialog/dialog.component";
import { ModalService } from "src/app/shared/services/modal.service";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";

@Component({
	selector: "app-search-filter",
	standalone: true,
	imports: [CommonModule, DialogComponent, MatDialogModule],
	templateUrl: "./search-filter.component.html",
	styleUrls: ["./search-filter.component.scss"],
})
export class SearchFilterComponent {
	modalService = inject(ModalService);
	matDialog = inject(MatDialog);

	openDialog(content: TemplateRef<any>): void {
		let dialogRef = this.matDialog.open(content, {
			width: "300px",
		});
	}
}
