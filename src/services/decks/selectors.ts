import { RootState } from '@/services/store.ts'
export const selectItemsPerPage = (state: RootState) => state.decks.itemsPerPage
export const selectCurrentPage = (state: RootState) => state.decks.currentPage
export const selectSearchByName = (state: RootState) => state.decks.searchByName
export const selectSortBy = (state: RootState) => state.decks.sortBy

export const selectNumberOfCards = (state: RootState) => state.decks.numberOfCards

export const selectDeckName = (state: RootState) => state.decks.deckName

export const selectIsInitDecks = (state: RootState) => state.decks.isInitDecks
