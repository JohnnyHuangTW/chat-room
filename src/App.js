import React, { useState, useEffect } from 'react'
import './App.css'
import Grid from '@material-ui/core/Grid'

import ChatRoom from './ChatRoom'
import SettingModal from './SettingModal'
import { user } from './service/user'

function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const username = user.username()

  useEffect(() => {
    if (!username) {
      setModalVisible(true)
    }
  }, [username])

  const onCloseHandler = () => {
    setModalVisible(false)
  }
  const onSubmitHandler = username => {
    user.setUsername(username)
    setModalVisible(false)
  }

  const handleChangeName = () => {
    setModalVisible(true)
  }

  return (
    <Grid className="app__container" container justify="center" spacing={1}>
      {/* Chat Room */}
      <Grid item xs={12} md={6}>
        <ChatRoom onChangeName={handleChangeName} />
      </Grid>

      <SettingModal
        onClose={onCloseHandler}
        visible={modalVisible}
        onSubmit={onSubmitHandler}
        onCancel={() => setModalVisible(false)}
      />
    </Grid>
  )
}

export default App
