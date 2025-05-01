import type { EditorState } from './state'

export const htmlLanguages = ['watt']

export const cssLanguages = ['css', 'tailwindcss']

export const jsLanguages = ['javascript', 'typescript']

export const specialLanguages = ['vue', 'svelte']

export const languages = [...cssLanguages, ...htmlLanguages, ...jsLanguages, ...specialLanguages]

const semicolonlessLanguages = ['sass', 'sugarss', 'stylus']

export function isSemicolonlessCssLanguage(
  languageId: string,
  userLanguages: EditorState['userLanguages'] = {},
) {
  return (
    semicolonlessLanguages.includes(languageId) ||
    semicolonlessLanguages.includes(userLanguages[languageId])
  )
}
