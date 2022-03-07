type language = {
  StartTimer: string;
  StopTimer: string;
  SelectActivity: string;
  EditActivity: string;
  CreateNewActivity: string;
  StartActivity: string;
  TitleLabel: string;
  DescriptionLabel: string;
  TitleActivityPreview: string;
  TimeEstimate: string;
  TimePassed: string;
  TimeLeftClock: string;
  ActivityFinishedQuestion: string;
  TimerExpired: string;
  MoreTimeToCompleteQuestion: string;
  ModifyActivity: string;
  y: string;
  n: string;
  ok: string;
  cancel: string;
  close: string;
  minutes: string;
  hours: string;
};

const fr: language = {
  StartTimer: "Démarrer minuteur",
  StopTimer: "Arrêter minuteur",
  SelectActivity: "Choisir une activité",
  CreateNewActivity: "Créer une nouvelle activité",
  EditActivity: `Éditer l'activité`,
  StartActivity: "Démarrer l'activité",
  TitleLabel: `Nom de l'activité :`,
  DescriptionLabel: `Description de l'activité :`,
  TitleActivityPreview: `Visualisation de l'activité`,
  TimeEstimate: "Temps estimé pour l'activité",
  TimePassed: "Temps écoulé sur l'activité",
  TimeLeftClock: "Représentation de l'horloge",
  ActivityFinishedQuestion: `Est-ce que l'activité est terminée?`,
  TimerExpired: "Temps écoulé!",
  MoreTimeToCompleteQuestion: "Avez-vous besoin de plus de temps pour terminer l'activité?",
  ModifyActivity: "Modifier l'activité sélectionnée",
  y: "Oui",
  n: "Non",
  ok: "OK",
  cancel: "Annuler",
  close: "Fermer la fenêtre",
  minutes: "minutes",
  hours: "heures"
};

const en: language = {
  StartTimer: "Start timer",
  StopTimer: "Stop Timer",
  SelectActivity: "Select Activity",
  EditActivity: "Edit Activity",
  CreateNewActivity: "Create activity",
  StartActivity: "Start Activity",
  TitleLabel: "Activity name :",
  DescriptionLabel: "Activity Description :",
  TitleActivityPreview: "Activity Preview",
  TimeEstimate: "Time estimated to finish activity :",
  TimePassed: "Time passed doing selected activity :",
  TimeLeftClock: "Timer Representation",
  ActivityFinishedQuestion: "Is the activity finished?",
  TimerExpired: "Time is up!",
  MoreTimeToCompleteQuestion: "Do you need more time to complete the current activity?",
  ModifyActivity: "Modify activity",
  y: "Yes",
  n: "No",
  ok: "Okay",
  cancel: "Cancel",
  close: "Close",
  minutes: "minutes",
  hours: "hours"
};

export { fr, en };
