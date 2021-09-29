import { useActiveActivity } from "../Components/ActivityProvider"

const ColorConfiguration: string[] = ['#f08080', '#ffa07a', '#ff7f50']
const DarkColorConfiguration: string[] = ['#D06060', '#DD805A', '#DD5f30']
const TrackColorConfiguration: string[] = ['#804040', '#8D603A', '#8D3f10']
const greyColorsConfiguration: string[] = ["#B0B0B0", "#C0C0C0", "#BCBCBC"]

export const ligthTheme = {
  background: '#FDFDFD',
  backdrop: '#EEEE',
  secondaryBackground: '#EFEFEF',
  tertiaryBackground: '#E9E9E9',
  primary: ColorConfiguration[1],
  secondary: ColorConfiguration[2],
  text: '#050505',
  error: '#FFFFFF',
  textInputBackground: '#E0E0E0',
  clockColors: ColorConfiguration,
  trackColors: TrackColorConfiguration,
  greyColors: greyColorsConfiguration,
}

export const darkTheme = {
  background: '#202020',
  backdrop: '#222E',
  secondaryBackground: '#272727',
  tertiaryBackground: '#313131',
  primary: DarkColorConfiguration[2],
  secondary: DarkColorConfiguration[0],
  text: '#E9E9E9',
  textInputBackground: '#363636',
  error: '#151515',
  clockColors: DarkColorConfiguration,
  trackColors: TrackColorConfiguration,
  greyColors: greyColorsConfiguration,
}

export type Colors = typeof ligthTheme
