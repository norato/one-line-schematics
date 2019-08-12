import { Rule } from '@angular-devkit/schematics';
import { buildComponent } from '@angular/cdk/schematics';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function secondStrategy(options: any): Rule {
  return buildComponent(options);
}
