import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material/material.module";
import { ListOptionComponent } from "./selection-list/list-option/list-option.component";
import { SelectionListComponent } from "./selection-list/selection-list.component";

const modules = [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule];

const components = [SelectionListComponent, ListOptionComponent];

@NgModule({
  imports: [...modules],
  exports: [...modules, ...components],
  declarations: [...components],
})
export class SharedModule {}
