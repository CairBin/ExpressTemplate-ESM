import express from 'express'
import indexCtrl from './../controllers/indexCtrl.js'

const router = express.Router()

router.get('/',(req,res,next)=>{
    indexCtrl.indexPage(req,res,next)
})

export default router