import {FC} from 'react'

type Props = {
    title?: string
  }

const AddEditPageTitle: FC<Props> = ({title}) => {
    return (
    <div className='card-title mb-0'>
        <h3 className='fw-bolder m-0'>{title}</h3>
    </div>
  )}
export {AddEditPageTitle}