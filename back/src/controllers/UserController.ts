import { Request, Response } from 'express';
import User from '../config/schemas/User';

class UserController {
    public async findAll( req: Request, res: Response ):  Promise<Response> {
        try {
            const user = await User.find()

            return res.json(user);
        } catch(e) {
            return res.status(403).json(e);
        }
    };

    public async register(req: Request, res: Response): Promise<Response> {
        try {
            const { name, email, pass } = req.body;

            const user = await User.findOne({ email });

            if(user)
                return res.status(403).json('Email or name already exits');

            const createEntry = new User({user, email, pass});
            const createAccount = await createEntry.save();            

            createAccount.pass = undefined;

            return res.json(createAccount);

        } catch(e) {
            return res.status(403).json(e);
        }
    }

}

export default new UserController();