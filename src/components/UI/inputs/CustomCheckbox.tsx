import React from "react"

type TCustomCheckbox = {
    id?:string,
    children?:React.ReactNode,
    checkboxValue:boolean,
    handler: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export const CustomCheckbox:React.FC<TCustomCheckbox> = ({id,children,checkboxValue,handler}) => {

    return(
        <input type='checkbox' id={id} checked={checkboxValue} onChange={handler}>
            {children}
        </input>
    )
}