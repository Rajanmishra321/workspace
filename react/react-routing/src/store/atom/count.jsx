import {atom, selector} from 'recoil'
export const countAtom=atom({
    key:'countAtom',
    default:0
})

export const evenSlector=selector({
    key:'evenSlector',
    get:({get})=>{
        const count=get(countAtom)
        return count%2 
    }
})