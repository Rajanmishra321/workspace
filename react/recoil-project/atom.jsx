import { atom, selector } from "recoil";
import axios from 'axios'
export const notifications = atom({
    key: "networkAtom",
    default:selector({
        key:'networkAtomSelector',
        get:async()=>{
            const res= await  axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})



/*export const networkAtom=atom({
    key:'networkAtom',
    default:102
})

export const jobsAtom=atom({
    key:'jobsAtom',
    default:0
})

export const notificationAtom=atom({
    key:'norificationAtom',
    default:12
})

export const messagingAtom=atom({
    key:'messagingAtom',
    default:0
})

export const totalnotificationSelector=selector({
    key:'totalnotificationSelector',
    get:({get}) =>{
        const networknotificationcount=get(networkAtom)
        const jobscount=get(jobsAtom)
        const notificationcount=get(notificationAtom)
        const messagingcount=get(messagingAtom)
        const totalnotificationcount= networknotificationcount+jobscount+messagingcount+notificationcount

        return totalnotificationcount
    }
})*/