import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

export type TUserState = {
    user: User | null,
    loading: boolean,
    error: string | null,
}

const initState: TUserState = {
    user: null,
    loading: false,
    error: null,
}

