import { Schema } from 'schematics-utilities';
import { SchematicContext, Tree } from '@angular-devkit/schematics';
import { setupOptions } from '../utils/setupOptions';
import { buildTemplateSource } from '../utils/buildTemplateSource';

export function buildTemplates(
  options: Schema,
  tree: Tree,
  context: SchematicContext
) {
  setupOptions(options, tree);
  return buildTemplateSource(options)(context);
}
