import { actualizarUsuarioCtrl, createUsuarioCtrl, eliminarUsuarioCtrl, getUsuariosCtrl } from '../controllers/usuario.controller';
import { Router } from 'express';
import { handleValidationErrors } from '../middlewares/validate.middleware';
import { validations } from '../validations/usuario.validation';

const router = Router();

router.get('/all',getUsuariosCtrl);

router.get(
    '/create',
    validations.create,
    handleValidationErrors,
    createUsuarioCtrl
);

router.put(
    '/edit',
    validations.edit,
    handleValidationErrors,
    actualizarUsuarioCtrl
);

router.delete(
    '/:IDUSUARIO',
    validations.delete,
    handleValidationErrors,    
    eliminarUsuarioCtrl
);

export default router;
