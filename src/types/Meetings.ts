import type { PersonMinimal } from '../types/Persons'

export type Meeting =
  | undefined
  | ({
      id: string // Week date number + 1 (midweek) or 2 (weekend)
      date: string // Meeting date
      day: string
      hour: string
      weekNumber: number
      weekStart: string
      weekEnd: string
      type: 'midweek' | 'weekend' | 'memorial'
    } & MeetingMinimal &
      (MidweekMeeting | WeekendMeeting))

type MeetingMinimal = {
  firstSong?: number
  firstPrayer?: PersonMinimal
  chairman?: PersonMinimal
  middleSong?: number
  lastSong?: number
  lastPrayer?: PersonMinimal
}

type MidweekMeeting = {
  treasures?: {
    treasures?: PersonMinimal
    spiritualGems?: PersonMinimal
    bibleReading?: PersonMinimal
  }
  ministry?: {
    initialCallVideo?: PersonMinimal
    returnVisitVideo?: PersonMinimal
    initialCall?: PersonMinimal
    returnVisit?: PersonMinimal
    bibleStudy?: PersonMinimal
    talk?: PersonMinimal
  }
  living?: {
    firstPart?: {
      issue: string
      conductor?: PersonMinimal
    }
    secondPart?: {
      issue: string
      conductor?: PersonMinimal
    }
    congregationBibleStudy?: {
      conductor?: PersonMinimal
      reader?: PersonMinimal
    }
  }
}

type WeekendMeeting = {
  publicTalk?: {
    issue: string
    speaker?: PersonMinimal
    congregation: string
  }
  watchtowerStudy?: {
    issue: string
    conductor?: PersonMinimal
    reader?: PersonMinimal
  }
}
