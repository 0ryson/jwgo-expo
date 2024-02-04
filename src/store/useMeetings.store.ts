import { create } from 'zustand'
import { Meeting } from '../types/Meetings'

type Store = {
  /*
   * The object with all the meetings data of a week
   */
  weekMeetings: Meeting[] | undefined
  /*
   * Save the data of all meetings of a week
   */
  setWeekMeetings: (data: Meeting[]) => void
}

const useMeetings = create<Store>((set) => ({
  weekMeetings: undefined,
  setWeekMeetings: (data) => set(() => ({ weekMeetings: data })),
}))

export default useMeetings
