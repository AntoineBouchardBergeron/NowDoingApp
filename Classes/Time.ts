export class Time {
  constructor(seconds: number) {
    this.seconds = seconds
    this.hours = Math.trunc(seconds / 3600)
    this.minutes = Math.floor((seconds - (this.hours * 3600))/60)
  }
  seconds: number
  minutes: number
  hours: number

  public tick() {
    const newTime = this.seconds + 1 < Infinity ? this.seconds + 1 : Infinity
    return new Time(newTime)
  }
}

export const TIME_SAMPLE: Time = new Time(3690)
