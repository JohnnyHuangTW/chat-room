import React from 'react'
import './App.css'
import Grid from '@material-ui/core/Grid'

import ChatRoom from './ChatRoom'

function App() {
  return (
    <Grid className="app__container" container justify="center" spacing={1}>
      {/* Chat Room */}
      <Grid item xs={12} md={6}>
        <ChatRoom />
      </Grid>
    </Grid>
  )
}

export default App
