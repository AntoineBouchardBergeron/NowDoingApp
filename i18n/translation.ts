type language = {
  StartTimer: string
  StopTimer: string
  SelectActivity: string
  TitleLabel: string
  DescriptionLabel: string
  y: string
  n: string
  ok: string
  cancel: string
}

const fr: language = {
  StartTimer: 'Démarrer minuteur',
  StopTimer: 'Arrêter minuteur',
  SelectActivity: 'Choisir une activité',
  TitleLabel: `Nom de l'activité :`,
  DescriptionLabel: `Description de l'activité :`,
  y: 'Oui',
  n: 'Non',
  ok: 'OK',
  cancel: 'Annuler',
}

const en: language = {
  StartTimer: 'Start timer',
  StopTimer: 'Stop Timer',
  SelectActivity: 'Select new Activity',
  TitleLabel: 'Activity name :',
  DescriptionLabel: 'Activity Description :',
  y: 'Yes',
  n: 'No',
  ok: 'Okay',
  cancel: 'Cancel',
}

export { fr, en }
