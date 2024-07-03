
import clsx from 'clsx'
import {FC} from 'react'

type Props = {
  text?: any
}
const TableColumnText: FC<Props> = ({text}) => {
  return (
  
    <div className='d-flex align-items-center'>
      <div className='d-flex flex-column'>
        <a className='text-gray-800 text-hover-primary mb-1'>
          {text}
        </a>
      </div>
    </div>
)}

export {TableColumnText}
