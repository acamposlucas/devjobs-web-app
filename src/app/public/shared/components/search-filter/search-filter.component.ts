import { Component, TemplateRef, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";

@Component({
	selector: "app-search-filter",
	standalone: true,
	imports: [CommonModule, MatDialogModule],
	templateUrl: "./search-filter.component.html",
	styleUrls: ["./search-filter.component.scss"],
})
export class SearchFilterComponent {
	matDialog = inject(MatDialog);

	openDialog(content: TemplateRef<any>): void {
		let dialogRef = this.matDialog.open(content, {
			width: "300px",
		});
	}
}
