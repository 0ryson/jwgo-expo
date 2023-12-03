export type Person = {
  id?: number
  name: string
  surname: string
  gender: 'man' | 'woman'
  appointments: Appointment[]
  permissions: Permission[]
  participations: Participation[]
}
export type Appointment = 'elder' | 'ministerialServant' | 'regularPioneer'

export type Permission =
  | 'prayer'
  | 'chairman'
  | 'treasures'
  | 'spiritualGems'
  | 'bibleReading'
  | 'initialCall'
  | 'returnVisit'
  | 'bibleStudy'
  | 'talk'
  | 'living'
  | 'congregationBibleStudy'
  | 'publicTalk'
  | 'watchtowerStudy'

type Participation = {
  participation: string
  meetingId: string
  date: string
}

export type PersonMinimal = {
  id?: number
  name: string
  surname: string
}
