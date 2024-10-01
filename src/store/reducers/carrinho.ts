import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type carrinhoState = {
  itens: Produto[]
}

const initialState: carrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarCompra: (state, action: PayloadAction<Produto>) => {
      const prod = action.payload

      if (state.itens.find((produto) => produto.id === prod.id)) {
        state.itens.splice(state.itens.indexOf(prod), 1)
      } else {
        state.itens.push(prod)
      }
    }
  }
})

export const { adicionarCompra } = carrinhoSlice.actions
export default carrinhoSlice.reducer
