import { createContext, useState } from 'react'

const ListContext = createContext(null)

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([
    { type: 'film', name: 'Testere (2001)', score: 9 },
    { type: 'film', name: 'Baba (1972)', score: 7 },
    { type: 'film', name: 'Baba 2 (1974)', score: 6 },
    { type: 'film', name: 'Kara Sövalye (2008)', score: 8 },
    { type: 'film', name: 'Taht Oyunları (2011)', score: 5 },
    { type: 'dizi', name: 'Breaking Bad (2008)', score: 7 },
    { type: 'dizi', name: 'House of Cards', score: 6 }
  ])
  const [switchModal, setSwitchModal] = useState(false)

  const values = {
    list,
    setList,
    switchModal,
    setSwitchModal
  }
  return <ListContext.Provider value={values}>{children}</ListContext.Provider>
}

export default ListContext
