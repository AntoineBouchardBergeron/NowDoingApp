export class DesiredTimeRepresentation {
  constructor(value: number) {
    if (value >= 0 && value < DesiredTimeRepresentation.descriptions.length) {
      this.value = value
      this.info = DesiredTimeRepresentation.descriptions[value]
    } else {
      this.value = DesiredTimeRepresentation.defaultTimeConfigurationValue
      this.info = DesiredTimeRepresentation.descriptions[this.value]
    }
  }

  value: number
  info: string

  static defaultTimeConfigurationValue: number = 2
  static descriptions: string[] = ['15 minutes', '1 hour', '4 hours']
}
