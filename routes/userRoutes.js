import { Router } from 'express';

import { 
    getUserController,
    createUserController,
    updatePutUserController,
    updatePatchUserController,
    deleteUserController

} from '../controllers/userController.js';


const router = Router();


router.get('/', getUserController );   

router.post('/', createUserController );

router.put('/:id', updatePutUserController );

router.patch('/:id', updatePatchUserController );

router.delete('/:id', deleteUserController );



export default router;