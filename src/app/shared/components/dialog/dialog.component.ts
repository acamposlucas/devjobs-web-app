import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	OnDestroy,
	OnInit,
	ViewChild,
	inject,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModalService } from "../../services/modal.service";

@Component({
	selector: "app-dialog",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./dialog.component.html",
	styleUrls: ["./dialog.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent implements OnInit, OnDestroy, AfterViewInit {
	@ViewChild("appDialog", { static: true })
	dialog!: ElementRef<HTMLDialogElement>;
	private cdr = inject(ChangeDetectorRef);
	private modalService = inject(ModalService);

	constructor() {}
	ngAfterViewInit(): void {
		this.dialog.nativeElement.addEventListener("click", (e) => {
			const element = e.target as HTMLElement;
			if (element.tagName === "DIALOG") {
				this.modalService.close();
			}
		});
	}

	ngOnInit(): void {
		this.dialog.nativeElement.showModal();
		this.cdr.detectChanges();
	}

	ngOnDestroy(): void {
		this.dialog.nativeElement.close();
		this.cdr.detectChanges();
	}
}
