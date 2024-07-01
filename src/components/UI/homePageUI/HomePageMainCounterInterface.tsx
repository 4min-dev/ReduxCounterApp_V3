import React from 'react'
import '../../../style/css/pages/homePage/homePageMainCounterInterface.css'
import { HomePageCounterCheckbox } from './HomePageCounterCheckbox'
import { GreenStyleButton } from '../buttons/GreenStyleButton'
import { useTypedSelectorStates } from '../../../hooks/useTypedSelectorStates'
import { useTypedDispatch } from '../../../hooks/useTypedDispatch'
import { decrementFullCash, decrementWithAmount, incrementWithAmount } from '../../../redux/store/reducers/counterReducer'
import { setRootError } from '../../../redux/store/reducers/rootErrorReducer'
import { actionBankCounterTypes } from '../../../redux/store/action-types/actionBankCounterTypes'

type TCounterProps = {
    totalCash:number
}

export const HomePageMainCounterInterface:React.FC<TCounterProps> = ({totalCash}) => {

  const selector = useTypedSelectorStates(state => state.counterDelayReducer)
  const dispatch = useTypedDispatch()

  const getCounterValue = (promptTitle:string):number | null => {
    let payload:number = Number(prompt(promptTitle))

    if(isNaN(payload)) {
      dispatch(setRootError('Not a number'))
      return null
    }
    
    return payload

}

  const incrHandler = () => {

    let payload:number | null = getCounterValue('+ value')

    if(payload !== null && payload >= 0) {
      dispatch(incrementWithAmount(payload))
      dispatch(setRootError(null))
    } else {
      dispatch(setRootError('Increment value cannot be less 0'))
    }
  }

  const decrHandler = () => {

    let payload:number | null = getCounterValue('- value')

    if(payload !== null) {
      if(payload >= totalCash) {
        dispatch(decrementFullCash())
     } else if(payload >= 0) {
        dispatch(decrementWithAmount(payload))
        dispatch(setRootError(null))
     } else {
        dispatch(setRootError('Decrement value cannot be less 0'))
     }
    }
  }

  const asyncHandlerIncrement = () => dispatch({type:actionBankCounterTypes.ASYNC_COUNTER_INCR})
  const asyncHandlerDecrement = () => dispatch({type:actionBankCounterTypes.ASYNC_COUNTER_DECR})

  return (
    <div className='homePageCounterUI'>
      <GreenStyleButton handleClick={() => !selector.checkboxValue ? incrHandler() : asyncHandlerIncrement()} buttonText={'+'}/>
      <HomePageCounterCheckbox delay={selector.delay} checkboxValue={selector.checkboxValue}/>
      <GreenStyleButton disabled={totalCash <= 0} handleClick={() => !selector.checkboxValue ? decrHandler() : asyncHandlerDecrement()} buttonText={'-'}/>
    </div>
  )
}