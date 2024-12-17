import React from 'react'
import { useState } from 'react'
import Counter from './Counter'
import NetworkComponent from './vis'
// import NetworkFlow from './flow'
import UpdateNode from './flow'

function App() {

  return (
    <div>
      <Counter/>
      {/* <NetworkComponent/> */}
      {/* <NetworkFlow/> */}
      {/* <CustomNodeFlow/> */}
      <UpdateNode/>
    </div>
  )
}

export default App;
