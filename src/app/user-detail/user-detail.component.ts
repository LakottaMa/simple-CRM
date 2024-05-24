import { Component, OnInit, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { User } from '../models/user.class';
import { Firestore, collection, onSnapshot } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatDialogModule, MatDialog, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { DialogEditDetailsComponent } from '../dialog-edit-details/dialog-edit-details.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [RouterModule, FormsModule, MatFormFieldModule, ReactiveFormsModule, RouterOutlet, CommonModule, MatDialogModule, MatDialogContent, MatDialogActions, MatDialogClose, MatMenuModule, MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  user = new User();
  userId = '';
  firestore: Firestore = inject(Firestore);
  @ViewChild('menuTrigger')
  menuTrigger!: MatMenuTrigger;

  constructor(private route: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.userId = this.route.url.split('/')[2];
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    const usersRef = collection(this.firestore, 'users');
    onSnapshot(usersRef, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id === this.userId) {
          this.user = doc.data() as User;
          this.user.id = doc.id;
          console.log(this.user);
        }
      });
    });
  }

  editUserDialog() {
    // const dialogRef = this.dialog.open(DialogEditDetailsComponent, {restoreFocus: false});
    // dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
    this.dialog.open(DialogEditDetailsComponent, {
      restoreFocus: false
    })
  }
}
