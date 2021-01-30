import React from 'react'
// import styled from 'styled-components'
import { Roller } from 'react-awesome-spinners'
// import LoadingOverlay from 'react-loading-overlay';

// const StyledLoader = styled(LoadingOverlay)`
//   width: auto;
//   height: auto;
//   overflow: scroll;
  
//   .MyLoader_overlay {
//     background: rgba(3, 90, 252, 0.3);
    
//   }
//   &.MyLoader_wrapper--active {
//     overflow: hidden;
//   }`

function ThemedSuspense(loading, isActive) {
  return (
  //   <StyledLoader
  // active={isActive}
  
  // classNamePrefix='MyLoader_'
  // >
    <div className="w-full h-screen p-6 text-lg flex justify-center items-center font-large text-gray-600 dark:text-gray-400 dark:bg-gray-900">
      
    <Roller color="blue" loading={loading} size={50} />
    {/* loading... */}
      
    </div>
    // </StyledLoader>
  )
}



export default ThemedSuspense
