import { createContext, Profiler, useContext } from "react";
import ActivityStore from "./activityStore";
import CommonStore from "./commonStote";
import ModalStore from "./modalStore";
import ProfileStore from "./ProfileStore";
import UserStore from "./userStote";

interface Store{
    activityStore: ActivityStore;
    commonStore: CommonStore;
    userStore: UserStore;
    modalStore: ModalStore;
    profileStore: ProfileStore;
}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    modalStore: new ModalStore(),
    profileStore: new ProfileStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}