import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
} from 'react'
import s from './SuperSelect.module.css'
import {ThemesType} from "../../../hw12/HW12";

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: ThemesType[]
    onChangeOption?: (option: number) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
    options,
    className,
    onChange,
    onChangeOption,
    ...restProps
}) => {
    const changeTheme = (id:number)=>{
        if(onChangeOption) onChangeOption(id)


    }

    const mappedOptions: JSX.Element[] = options
        ? options.map((o) => (
              <option
                  id={'hw7-option-' + o.id}
                  className={s.option}
                  key={o.id}
                  value={o.id}
                  onClick={()=>{changeTheme(o.id)}}
              >
                  {o.value}
              </option>
          ))
        : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {

        if(onChangeOption){
           onChangeOption(+e.currentTarget.value)
        }
        if(onChange) onChange(e)
        // делают студенты
        // если onChangeOption вообще существует, то...
    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')

    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
