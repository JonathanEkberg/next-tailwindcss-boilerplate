import create, { State } from "zustand"
import { persist } from "zustand/middleware"

interface AppState extends State {
	darkmode: boolean | undefined
	setDarkmode: (value: boolean) => void
	toggleDarkmode: () => void
}

export const useStore = create<AppState>(
	persist(
		(set) => ({
			darkmode: undefined,
			setDarkmode: (value) => set({ darkmode: value }),
			toggleDarkmode: () => set((state) => ({ darkmode: !state.darkmode })),
		}),
		{
			name: "state",
		}
	)
)
