import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContentTypeSelectionComponent } from '../modals/content-type-selection/content-type-selection.component';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authenticationService: AuthenticationService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openContentCreationModal() {
    const dialogRef = this.dialog.open(ContentTypeSelectionComponent);
  }
}
