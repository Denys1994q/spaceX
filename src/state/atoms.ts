import {atom} from 'recoil'

import { CardItem } from '../components/UI/molecules/CardsBox'

const data: any = window.localStorage.getItem("favourites")
const favourites: CardItem[] = window.localStorage.getItem("favourites") ? JSON.parse(data) : []

export const favouritesToursState = atom({
    key: 'favouritesToursState',
    default: favourites
})