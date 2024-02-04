import { create } from 'zustand'
import { Meeting } from '../types/Meetings'

type Store = {
  meetings: Meeting
  setMeetings: (data: Meeting) => void
}

const useMeetings = create<Store>((set) => ({
  meetings: undefined,
  setMeetings: (data) => set(() => ({ meetings: data })),
}))

export default useMeetings
