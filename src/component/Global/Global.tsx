import { atom, selector } from "recoil"
import img from "../img/use.png"
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();




export const imgshow = atom({
    key: "imgshow",
    default:  "" as any
  })
export const videoshow = atom({
    key: "videoshow",
    default:  "" as any
  })
  