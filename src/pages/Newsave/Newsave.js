import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import InputLabel from '@material-ui/core/InputLabel'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import Button from '@material-ui/core/Button'
import styles from './newsave.module.scss'
import CheckIcon from '@material-ui/icons/Check'
import TextField from '@material-ui/core/TextField'
import { useContext, useState, useEffect } from 'react'
import ListContext from '../../context/ListContext'
import CreateModal from '../../components/Modals/CreateModal/CreateModal'

function NewSave() {
  const { list, setList } = useContext(ListContext)
  const [type, setType] = useState('')
  const [name, setName] = useState('')
  const [score, setScore] = useState('')
  const { switchModal, setSwitchModal } = useContext(ListContext)

  useEffect(() => {}, [switchModal])

  const newSave = () => {
    // { type: 'film', name: 'Testere (2001)', score: 9 }
    setList([...list, { type, name, score }])
    setSwitchModal(true)
  }

  return (
    <div className={styles.page}>
      <form className={styles.newSaveForm} autoComplete="off">
        <RadioGroup
          className={styles.radiosGroup}
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <FormControlLabel
            value="film"
            label="Film"
            className={styles.radioslabel}
            control={<Radio className={styles.radios} />}
            label="Film"
          />
          <FormControlLabel
            value="dizi"
            className={styles.radioslabel}
            control={<Radio className={styles.radios} />}
            label="Dizi"
          />
        </RadioGroup>
        <TextField
          className={styles.MovieSeriesInput}
          id="outlined-basic"
          label="Film/Dizi Adı"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          className={styles.pointInput}
          id="outlined-basic"
          label="Puanı"
          variant="outlined"
          onChange={(e) => setScore(e.target.value)}
        />
        <Button className={styles.save} onClick={() => newSave()}>
          <span>Kaydet</span>
        </Button>
      </form>
      <CreateModal />
    </div>
  )
}

export default NewSave
