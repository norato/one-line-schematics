import { Schema } from 'schematics-utilities';
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { setupOptions } from '../utils/setupOptions';
import { buildTemplateSource } from '../utils/buildTemplateSource';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function firstStrategy(options: Schema): Rule {
  return (tree: Tree, context: SchematicContext) => {
    setupOptions(options, tree);
    return buildTemplateSource(options)(context);
  };
}
