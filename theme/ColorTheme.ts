const ColorConfiguration: string[] = ['#f08080', '#ffa07a', '#ff7f50']
const DarkColorConfiguration: string[] = ['#D06060', '#DD805A', '#DD5f30']
const GrayColorConfiguration: string[] = ['#804040', '#8D603A', '#8D3f10']

export const ligthTheme = {
  background: '#FDFDFD',
  backdrop: '#EEEC',
  secondaryBackground: '#EFEFEF',
  tertiaryBackground: '#E9E9E9',
  primary: ColorConfiguration[1],
  secondary: ColorConfiguration[0],
  text: '#050505',
  error: '#FFFFFF',
  textInputBackground: '#E0E0E0',
  clockColors: ColorConfiguration,
  trackColors: GrayColorConfiguration,
}

export const darkTheme = {
  background: '#202020',
  backdrop: '#222C',
  secondaryBackground: '#272727',
  tertiaryBackground: '#313131',
  primary: DarkColorConfiguration[2],
  secondary: DarkColorConfiguration[0],
  text: '#E9E9E9',
  textInputBackground: '#363636',
  error: '#151515',
  clockColors: DarkColorConfiguration,
  trackColors: GrayColorConfiguration,
}

export type Colors = typeof ligthTheme
