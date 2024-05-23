import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { User } from '../models/user.class';
import { Firestore, collection, onSnapshot } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  user = new User();
  userId = '';

  constructor(private route: Router, private firestore: Firestore) {}

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

  openAddressDialog() {
  }
}
