import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortnerComponent } from './shortner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { ShortnerStoreModule } from 'store';
import { AngularMaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [ShortnerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShortnerStoreModule,
    AngularMaterialModule
  ],
  exports:[
    ShortnerComponent
  ]
})
export class ShortnerModule { }
