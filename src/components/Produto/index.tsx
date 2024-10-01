import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

import { adicionarCompra } from '../../store/reducers/carrinho'
import { adicionarFavorito } from '../../store/reducers/favoritos'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const carrinho = useSelector((state: RootReducer) => state.carrinho.itens)
  const noCarrinho = carrinho.some(
    (itemCarrinho) => itemCarrinho.id === produto.id
  )
  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)
  const nosFavoritos = favoritos.some(
    (itemFavorito) => itemFavorito.id === produto.id
  )

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() => dispatch(adicionarFavorito(produto))}
        type="button"
      >
        {nosFavoritos ? '- Remover dos favoritos' : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar
        onClick={() => dispatch(adicionarCompra(produto))}
        type="button"
      >
        {noCarrinho ? '- Remover do carrinho' : '+ Adicionar ao carrinho'}
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
