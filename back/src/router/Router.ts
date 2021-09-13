import { Router } from 'express';
import HomeRouter from './HomeRouter';

const router = Router();

router.use('/', HomeRouter);
// authLogin
export = router;