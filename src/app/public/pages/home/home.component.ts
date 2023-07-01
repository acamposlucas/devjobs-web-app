import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../../shared/header/header.component";
import { JobCardComponent } from "../../shared/components/job-card/job-card.component";
import { JobService } from "../../services/job.service";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [CommonModule, HeaderComponent, JobCardComponent],
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
	jobService = inject(JobService);
	jobList = this.jobService.getAllJobs();
}
