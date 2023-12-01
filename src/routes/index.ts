import {Router} from 'express'
import {Request, Response} from 'express'
import * as produtoController from '../controllers/produtoController'


const router = Router()

router.get('/',(req:Request,res:Response) =>{
    res.send("TESTANDO")
})

router.get('/produtos',produtoController.index)
router.get('/cadastro',produtoController.visualizarPaginaCadastro)


//criando a rota de produtos
router.get('/produtos',produtoController.index)


//rota para cadastrar os produtos
router.post('/cadastro',produtoController.cadastroProduto)

//chamando editaProduto
router.get('/editar/:id',produtoController.editaProduto)
//chamando atualizaProduto
router.post('/editar/:id',produtoController.atualizaProduto)
//chamando excluir
router.get('/excluir/:id',produtoController.deletaProduto)

export default router
