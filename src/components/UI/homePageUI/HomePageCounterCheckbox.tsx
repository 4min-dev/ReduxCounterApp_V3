import React from 'react'
import '../../../style/css/pages/homePage/homePageCounterCheckbox.css'
import { CustomCheckbox } from '../inputs/CustomCheckbox'
import { Label } from '../inputs/Label'
import { DelayButton } from '../buttons/DelayButton'
import { IDelayValue } from '../../../ts/interfaces/global/delay/IDelayValue'
import { IDefaultDelayValues } from '../../../ts/interfaces/global/delay/IDefaultDelayValues'
import { useTypedDispatch } from '../../../hooks/useTypedDispatch'
import { setChecked, setCounterDelay } from '../../../redux/store/reducers/counterDelayReducer'
import { setRootError } from '../../../redux/store/reducers/rootErrorReducer'

export const HomePageCounterCheckbox:React.FC<IDelayValue> = ({delay,checkboxValue}) => {

    const dispatch = useTypedDispatch()

    function counterDelay () {
      const defaultDelay:IDefaultDelayValues = {maxDelay:9999,minDelay:0}
      let delayInput = prompt(`Set delay | No less ${defaultDelay.minDelay} and no more ${defaultDelay.maxDelay}`)

      if(delayInput === null || delayInput === undefined) {
        return delay
      } else {
        if(isNaN(Number(delayInput))) {
          dispatch(setRootError('Not a number'))
          return delay
      } else if(Number(delayInput) < defaultDelay.minDelay) {
          dispatch(setRootError(`Value is not responding (No less ${defaultDelay.minDelay})`))
          return defaultDelay.minDelay
      } else if(Number(delayInput) > defaultDelay.maxDelay) {
          dispatch(setRootError(`Value is not responding (No more ${defaultDelay.maxDelay})`))
          return defaultDelay.maxDelay
      }
        dispatch(setRootError(null))
        return delayInput
      }
}

  const setDelay = () => dispatch(setCounterDelay(Number(counterDelay())))
  const setAsyncCheckboxValue = (e:React.ChangeEvent<HTMLInputElement>) => dispatch(setChecked(e.target.checked))
  

  return (
    <div className='homePageCounterCheckboxContainer'>
        <span>
            <CustomCheckbox id='customAsyncCheckbox' checkboxValue={checkboxValue} handler={(e) => setAsyncCheckboxValue(e)}/>
            <Label labelFor='customAsyncCheckbox' labelText={`Async(${delay})`}/>
         </span>
        <DelayButton id='delayButton' buttonText='Delay' handleClick={setDelay}/>
    </div>
  )
}