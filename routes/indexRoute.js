import express from 'express'
import indexCtrl from './../controllers/indexCtrl.js'

const router = express.Router()

router.get('/',(res,req,next)=>{
    indexCtrl.indexPage(res,req,next)
})

export default router