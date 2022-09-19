import { Router } from "express";
const route=Router()
import {tweets,giphyUrls} from '../Trends.js'


route.get('/',(req,res)=>{
   res.send(tweets)
})

export default route
