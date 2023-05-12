import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

export const numberAtom = atom<number>(-1);

export const stringResettableAtom = atomWithReset<string>("");
