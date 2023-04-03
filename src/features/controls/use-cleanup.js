import { useDispatch } from 'react-redux'

import { clearControls } from './controls-slice'

const useCleanup = () => {
  const dispatch = useDispatch()

  const cleanUp = () => dispatch(clearControls)

  return () => dispatch(cleanUp())
}

export default useCleanup
