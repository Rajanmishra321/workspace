
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from '../atom'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App


/*import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue, useRecoilState, selector } from 'recoil'
import { messagingAtom, networkAtom, notificationAtom ,jobsAtom, totalnotificationSelector} from '../atoms'

function App() {
  return (
    <div>
      <RecoilRoot>
      <MainApp></MainApp>
      </RecoilRoot>
    </div>
  )
}

function MainApp()
  {
    const networknotificationcount=useRecoilValue(networkAtom)
    const jobscount=useRecoilValue(jobsAtom)
    const messagingcount=useRecoilValue(messagingAtom)
    const notificationcount=useRecoilValue(notificationAtom)
    const totalnotificationcount=useRecoilValue(totalnotificationSelector)


    // const totalnotification=useMemo(()=>{
    //   return networknotificationcount+jobscount+messagingcount+notificationcount
    // },[networknotificationcount,jobscount,messagingcount,notificationcount])


    return <div>
    <button>home</button>

      <button>my network({networknotificationcount >=100 ? '99+' : networknotificationcount})</button>
      <button>jobs ({jobscount>=100?'99+': jobscount})</button>
      <button>messaging ({messagingcount>=100?'99+': messagingcount})</button>
      <button>notification ({notificationcount>=100?'99+': notificationcount})</button>

      <button>me  ({totalnotificationcount})</button>
  </div>
  }
export default App*/
