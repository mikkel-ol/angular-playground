import { NgModule } from "@angular/core"
import { MatAutocompleteModule } from "@angular/material/autocomplete"

const modules = [
  // Angular Material Modules
  MatAutocompleteModule,
]

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule {}
