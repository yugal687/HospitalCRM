import React from 'react'
import LoadingOverlay from 'react-loading-overlay'
import { Roller } from 'react-awesome-spinners'

function Main({ children, active  }) {
  return (
    <main className="h-full overflow-y-auto">
      {/* <LoadingOverlay
      active={active}
      spinner={<Roller color="blue"  size={50} />}
    > */}
      <div className="container grid px-6 mx-auto">
      
        {children}
        
        </div>
        {/* </LoadingOverlay> */}
    </main>
  )
}

export default Main
