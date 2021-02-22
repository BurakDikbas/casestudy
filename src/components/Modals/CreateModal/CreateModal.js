import React, { useContext, useEffect, useState } from 'react'
import Modal from '@material-ui/core/Modal'
import CheckIcon from '@material-ui/icons/Check'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import ListContext from '../../../context/ListContext'
import styles from './createmodal.module.scss'

function CreateModal() {
  const { switchModal, setSwitchModal } = useContext(ListContext)

  const handleClose = () => {
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
          <CheckIcon className={styles.checkIcon} />
          <Typography className={styles.description}>Kaydedildi</Typography>
          <div className={styles.okeyButton}>
            <Button className={styles.buttons} onClick={() => setSwitchModal(false)}>
              <span>Tamam</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Modal>
  )
}

export default CreateModal
