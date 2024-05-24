import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule, MatDialog, MatDialogContent, MatDialogClose } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../services/components/dialog-add-user/dialog-add-user.component';
import { User } from '../models/user.class';
import { Firestore, collection, getDocs, query } from '@angular/fire/firestore';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, MatCardModule, MatDialogClose, MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule, MatDialogContent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})

export class UserComponent implements OnInit {
  user = new User();
  allUsers: User[] = [];

  constructor(public dialog: MatDialog, private firestore: Firestore) { }
  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    const usersRef = collection(this.firestore, 'users');
    getDocs(query(usersRef)).then((querySnapshot) => {
      this.allUsers = [];
      querySnapshot.forEach((doc) => {
        const userData = doc.data() as User;
        userData.id = doc.id;
        this.allUsers.push(userData);
      });
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogAddUserComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'added') {
        this.loadUsers();
      }
    });
  }
}
