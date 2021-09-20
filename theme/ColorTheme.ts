const ColorConfiguration: string[] = ['#f08080', '#ffa07a', '#ff7f50']

export const ligthTheme = {
  background: '#FDFDFD',
  primary: ColorConfiguration[1],
  secondary: ColorConfiguration[0],
  text: '#050505',
  error: '#FFFFFF',
}

export const darkTheme = {
  background: '#202020',
  primary: ColorConfiguration[2],
  secondary: ColorConfiguration[0],
  text: '#FFFFFF',
  error: '#151515',
}

export type Colors = typeof ligthTheme
