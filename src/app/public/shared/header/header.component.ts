import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterComponent } from '../components/search-filter/search-filter.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SearchFilterComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
