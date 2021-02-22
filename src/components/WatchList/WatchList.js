import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import DeleteIcon from '@material-ui/icons/Delete'
import StarIcon from '@material-ui/icons/Star'
import React, { useContext, useEffect, useState } from 'react'
import ListContext from '../../context/ListContext'
import DeleteModal from '../Modals/DeleteModal/DeleteModal'
import styles from './WatchList.module.scss'

function WatchList() {
  const { list, setList } = useContext(ListContext)
  const { switchModal, setSwitchModal } = useContext(ListContext)
  const [watchId, setWatchId] = useState(0)
  const [watchName, setWatchName] = useState('')

  useEffect(() => {}, [list])

  useEffect(() => {}, [switchModal])

  const setPoint = (i, score) => {
    list[i].score = score
    setList([...list])
  }

  const handleOpen = (i, name) => {
    setWatchId(i)
    setWatchName(name)
    setSwitchModal(true)
  }

  return (
    <Grid style={{ marginTop: 20 }}>
      {list.map((watch, i) => (
        <Paper key={i} className={styles.card}>
          <Typography className={styles.watch}>
            <span>{watch.name}</span>
            <DeleteIcon onClick={() => handleOpen(i, watch.name)} style={{ color: 'red' }} />
          </Typography>
          <div className={styles.score}>
            <StarIcon className={styles.star} />
            <Typography className={styles.starpoints}>{watch.score}</Typography>
          </div>
          <div className={styles.point}>
            <Typography className={styles.pointdescription}>Puan Ver</Typography>
            <ArrowDropUpIcon
              onClick={() => setPoint(i, ++watch.score)}
              className={styles.pointiconup}
            />
            <ArrowDropDownIcon
              onClick={() => setPoint(i, --watch.score)}
              className={styles.pointicondown}
            />
          </div>
        </Paper>
      ))}
      <DeleteModal isOpen={switchModal} id={watchId} name={watchName} />
    </Grid>
  )
}

export default WatchList
