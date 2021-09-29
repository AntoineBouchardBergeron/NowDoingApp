export class Time {
  constructor(seconds: number) {
    this.seconds = seconds;
    this.hours = Math.trunc(seconds / 3600);
    this.minutes = Math.floor((seconds - this.hours * 3600) / 60);
  }
  seconds: number;
  minutes: number;
  hours: number;

  public tick() {
    return new Time(this.seconds + 1 < Infinity ? this.seconds + 1 : Infinity);
  }

  //return a newTime of t1 - t2
  public static timeDifference(t1: Time, t2: Time) {
    return new Time(t1.seconds - t2.seconds);
  }
}

export const TIME_SAMPLE: Time = new Time(3690);
