import { type WorkspaceConfiguration, type ConfigurationScope, type WorkspaceFolder } from 'vscode';
export declare function getExcludePatterns(scope: ConfigurationScope | null): string[];
export declare function isExcluded(file: string, folder: WorkspaceFolder): boolean;
export declare function mergeExcludes(settings: WorkspaceConfiguration, scope: ConfigurationScope | null): any;
