import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-dialog-edit-details',
  standalone: true,
  imports: [ CommonModule, MatButtonModule, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogActions, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, FormsModule, ReactiveFormsModule, MatProgressBarModule],
  templateUrl: './dialog-edit-details.component.html',
  styleUrl: './dialog-edit-details.component.scss'
})
export class DialogEditDetailsComponent {
  constructor(public dialogRef: MatDialogRef<DialogEditDetailsComponent>) { }


    editSave() {
      this.dialogRef.close();
    }

    onCancel() {
      this.dialogRef.close();
    }
}
