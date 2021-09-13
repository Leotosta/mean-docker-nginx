import {Router} from 'express';
import HomeController from '../controllers/UserController';

const router = Router()

router.route('/home').get(HomeController.findAll)
router.route('/register').post(HomeController.register)

export = router