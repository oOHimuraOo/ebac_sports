import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type favoritosState = {
  itens: Produto[]
}

const initialState: favoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFavorito: (state, action: PayloadAction<Produto>) => {
      const prod = action.payload

      if (state.itens.find((produto) => produto.id === prod.id)) {
        state.itens.splice(state.itens.indexOf(prod), 1)
      } else {
        state.itens.push(prod)
      }
    }
  }
})

export const { adicionarFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
