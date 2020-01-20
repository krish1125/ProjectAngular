import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// ng g m shared/shared --flat -m employee/employee

@NgModule({
  declarations: [],
  imports: [
    // CommonModule
  ],

  exports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
