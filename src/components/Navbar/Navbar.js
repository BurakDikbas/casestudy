import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AddIcon from '@material-ui/icons/Add'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import { useContext, useState, useEffect } from 'react'
import styles from './navbar.module.scss'
import { Typography } from '@material-ui/core'
import ListContext from '../../context/ListContext'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

function Navbar() {
  const { list, setList } = useContext(ListContext)
  const [updateList, setUpdateList] = useState(list)
  const [allChecked, setAllChecked] = useState(true)
  const [filmlerChecked, setFilmlerChecked] = useState(false)
  const [dizilerChecked, setDizilerChecked] = useState(false)
  const [openTurler, setOpenTurler] = useState(false)
  const location = useLocation()

  const handleClickTurler = () => {
    setOpenTurler((prev) => !prev)
  }

  const handleClickAwayTurler = () => {
    setOpenTurler(false)
  }

  const [openSirala, setOpenSirala] = useState(false)

  const handleClickSirala = () => {
    setOpenSirala((prev) => !prev)
  }

  const handleClickAwaySirala = () => {
    setOpenSirala(false)
  }

  useEffect(() => {
    filterList()
  }, [allChecked, filmlerChecked, dizilerChecked])

  const filterList = () => {
    if (allChecked) {
      setList([...updateList])
    } else if (filmlerChecked && !dizilerChecked) {
      setList([...list.filter((t) => t.type == 'film')])
    } else if (dizilerChecked && !filmlerChecked) {
      setList([...list.filter((t) => t.type == 'dizi')])
    } else {
      setList([...updateList])
    }
  }

  const sort = (list, cond) => {
    if (cond === 'increasePoint') setList([...list.sort((a, b) => a.score - b.score)])
    else setList([...list.sort((a, b) => b.score - a.score)])
  }

  return (
    <AppBar className={styles.nav} position="static">
      <Toolbar variant="dense">
        {location.pathname == '/' ? (
          <div className={styles.filters}>
            <ClickAwayListener onClickAway={handleClickAwayTurler}>
              <div className={styles.root}>
                <button type="button" onClick={handleClickTurler}>
                  Türler <ArrowDropDownIcon />
                </button>
                {openTurler ? (
                  <div className={styles.dropdownOne}>
                    <ul>
                      <li>
                        <span>Tümü</span>
                        <Checkbox
                          checked={allChecked}
                          onChange={() => setAllChecked(!allChecked)}
                          inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                      </li>
                      <li>
                        <span>Filmler</span>
                        <Checkbox
                          checked={filmlerChecked}
                          disabled={allChecked ? true : false}
                          onChange={() => setFilmlerChecked(!filmlerChecked)}
                          inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                      </li>
                      <li>
                        <span>Diziler</span>
                        <Checkbox
                          checked={dizilerChecked}
                          disabled={allChecked ? true : false}
                          onChange={() => setDizilerChecked(!dizilerChecked)}
                          inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                      </li>
                    </ul>
                  </div>
                ) : null}
              </div>
            </ClickAwayListener>
            <ClickAwayListener onClickAway={handleClickAwaySirala}>
              <div className={styles.root}>
                <button type="button" onClick={handleClickSirala}>
                  Sırala <ArrowDropDownIcon />
                </button>
                {openSirala ? (
                  <div className={styles.dropdownTwo}>
                    <ul>
                      <li onClick={() => sort(list, 'decreasePoint')}>Puana Göre (Azalan)</li>
                      <li onClick={() => sort(list, 'increasePoint')}>Puana Göre (Artan)</li>
                    </ul>
                  </div>
                ) : null}
              </div>
            </ClickAwayListener>
          </div>
        ) : (
          <Link to="/newSave" className={styles.newSaveLink}>
            <Link to="/" className={styles.newSaveLink}>
              <Button className={styles.newSave}>
                {' '}
                <ArrowBackIosIcon className={styles.backIcon} /> <span>Listeye Dön</span>{' '}
              </Button>{' '}
            </Link>
          </Link>
        )}
        <Typography className={styles.title}>Case Study</Typography>
        <Link to="/newSave" className={styles.newSaveLink}>
          <Button className={styles.newSave}>
            <AddIcon />
            <span>YENI KAYIT</span>
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
