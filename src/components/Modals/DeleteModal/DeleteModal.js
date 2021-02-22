import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Modal from '@material-ui/core/Modal'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import React, { useContext, useEffect, useState } from 'react'
import styles from './DeleteModal.module.scss'
import ListContext from '../../../context/ListContext'

function DeleteModal({ isOpen, id, name }) {
  const { list, setList } = useContext(ListContext)
  const { switchModal, setSwitchModal } = useContext(ListContext)

  const handleOpen = () => {
    setSwitchModal(true)
  }

  const handleClose = () => {
    setSwitchModal(false)
  }

  useEffect(() => {
    setSwitchModal(isOpen)
  }, [isOpen])

  const deleteWatch = (i) => {
    list.splice(i, 1)
    setList([...list])
    setSwitchModal(false)
  }
  return (
    <Modal
      className={styles.modalPlace}
      open={switchModal}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Card className={styles.card}>
        <CardContent className={styles.cardContent}>
          <DeleteIcon className={styles.deleteIcon} />
          <Typography className={styles.description}>
            {name} Silmek istediğinize emin misiniz?
          </Typography>
          <div className={styles.deletesButton}>
            <Button className={styles.buttons} onClick={() => setSwitchModal(false)}>
              <span>İptal</span>
            </Button>
            <Button className={styles.buttons} onClick={() => deleteWatch(id)}>
              <span>Evet</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Modal>
  )
}

export default DeleteModal
