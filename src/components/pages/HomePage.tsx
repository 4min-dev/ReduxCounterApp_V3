import React from 'react';
import '../../style/css/pages/homePage/homePage.css';
import { HomePageMainCounterInterface } from '../UI/homePageUI/HomePageMainCounterInterface';
import { HomePageUsersSection } from '../sections/homePageSections/HomePageUsersSection';
import { useTypedSelectorStates } from '../../hooks/useTypedSelectorStates';
import { ErrorInterface } from '../UI/errors/ErrorInterface';

export const HomePage:React.FC = () => {

    const selector = useTypedSelectorStates(state => state.counterReducer)
    const rootErrorSelector = useTypedSelectorStates(state => state.rootErrorReducer)

  return (
    <div className='homePage'>
      <h1>{`Total cash - $${selector.cash}`}</h1>
      {rootErrorSelector.error && <ErrorInterface error={rootErrorSelector.error} canReload={false}/>}
      <HomePageMainCounterInterface totalCash={selector.cash}/>
      <HomePageUsersSection/>
    </div>
  )
}