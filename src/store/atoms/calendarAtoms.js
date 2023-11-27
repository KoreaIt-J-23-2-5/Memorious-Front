import { atom } from "recoil";

export const calendarRecoil = atom({
    key: "schedule_data",
    default: [],
});

export const scheduleRecoil = atom({
    key: "schedule",
    default: {},
});

export const familyRecoil = atom({
    key: "family",
    default: [],
});
