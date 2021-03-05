import create, { State } from "zustand"
import { persist } from "zustand/middleware"

interface AppState extends State {
	darkmode: boolean
	setDarkmode: (value: boolean) => void
}

export const useStore = create<AppState>(
	persist(
		(set) => ({
			darkmode: false,
			setDarkmode: (value) => set({ darkmode: value }),
		}),
		{
			name: "state",
		}
	)
)
