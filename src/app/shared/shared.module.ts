import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material/material.module";

const modules = [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule];

const components: any[] = [];

@NgModule({
  imports: [...modules],
  exports: [...modules, ...components],
  declarations: [...components],
})
export class SharedModule {}
