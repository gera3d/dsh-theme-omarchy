export interface OmarchyThemeDefinition {
  id: string
  name: string
  subtitle: string
  colorScheme: 'dark' | 'light'
  accentColor: string
  bgPreview: string
  tokens: Record<string, string>
}
