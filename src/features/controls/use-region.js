import { useDispatch, useSelector } from 'react-redux'
import { setRegion, selectRegion } from './controls-slice'

const useRegion = () => {
  const region = useSelector(selectRegion)
  const dispatch = useDispatch()

  const handlerSelect = (reg) => {
    dispatch(setRegion(reg?.value || ''))
  }

  return [region, handlerSelect]
}

export default useRegion
