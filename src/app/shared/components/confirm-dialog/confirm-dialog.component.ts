import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogData } from './confirm-dialog-data.interface';
@Component({
    selector: 'app-confirm-dialog',
    template: `
        <h2 mat-dialog-title>
            {{ dialogData.title }}
        </h2>
        <mat-dialog-content class="mat-typography">
            {{ dialogData.message }}
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-flat-button [mat-dialog-close]="true" color="accent">
                {{ dialogData?.confirmLabel || 'YES' | translate }}
            </button>
            <button mat-button mat-dialog-close cdkFocusInitial color="accent">
                {{ dialogData?.cancelLabel || 'NO' | translate }}
            </button>
        </mat-dialog-actions>
    `,
})
export class ConfirmDialogComponent {
    /** Contains meta information to show in the dialog */
    dialogData!: ConfirmDialogData;

    constructor(@Inject(MAT_DIALOG_DATA) data: ConfirmDialogData) {
        this.dialogData = data;
    }
}
