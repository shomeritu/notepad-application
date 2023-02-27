import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule
  ]
})
export class MaterialModuleModule {
  constructor() { }
  static forRoot(): ModuleWithProviders<MaterialModuleModule> {
    return {
      ngModule: MaterialModuleModule,
      providers: [MaterialModuleModule]
    }
  }
}
