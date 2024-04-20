import { store } from "@/lib/redux/store";

export type RootState = ReturnType<typeof store.getState>;
