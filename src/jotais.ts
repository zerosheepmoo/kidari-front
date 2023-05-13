import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";
import { User } from "./interfaces/user-api";

export const numberAtom = atom<number>(-1);

export const stringResettableAtom = atomWithReset<string>("");

export const userAtom = atom<User | undefined>(undefined);
export const userLoggedInCheckedAtom = atom(false);
