import { Schema } from 'schematics-utilities';
import {
  Source,
  url,
  Rule,
  template,
  move,
  apply
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

export function buildTemplateSource(options: Schema) {
  const source: Source = url('./files');
  const rules: Rule[] = [
    template({
      ...strings,
      ...options
    }),
    move(options.path || '')
  ];
  const templateSource: Source = apply(source, rules);
  return templateSource;
}
