import { Tree } from '@angular-devkit/schematics';
import {
  buildDefaultPath,
  findModuleFromOptions,
  getWorkspace,
  parseName,
  Schema
} from 'schematics-utilities';

export function setupOptions(options: Schema, host: Tree): void {
  const workspace = getWorkspace(host);

  const projectIndex = options.project || workspace.defaultProject || 0;
  const project = workspace.projects[projectIndex];

  if (options.path === undefined) {
    options.path = buildDefaultPath(project);
  }
  const parsedPath = parseName(options.path, options.name);

  // Infer module path, if not passed:
  options.module = findModuleFromOptions(host, options);
  options.name = parsedPath.name;
  options.path = parsedPath.path;
}
