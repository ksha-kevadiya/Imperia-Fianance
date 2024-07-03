
import clsx from 'clsx'
import {FC} from 'react'

type Props = {
  first_name?: string
 
  photo?: string
}
const NameWithPhoto: FC<Props> = ({first_name, photo}) => {
  const bgColors = ['warning', 'success', 'danger'];
  const randomBgColor = bgColors[Math.floor(Math.random() * bgColors.length)];  
  return (
  
    <div className='d-flex align-items-center'>
      <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
        <a href='#'>
          {photo ? (
            <div className='symbol-label'>
              <img src={photo} alt={(first_name ?? '').charAt(0).toUpperCase()} className='w-100' style={{height:'50px',objectFit:'cover', width:'50px'}} />
            </div>
          ) : (
            <div
              className={clsx(
                'symbol-label fs-3',
                `bg-light-${randomBgColor}`,
                `text-${randomBgColor}`
              )}
            >
              {(first_name ?? '').charAt(0).toUpperCase() ? (first_name ?? '').charAt(0).toUpperCase() : `#`}
            </div>
          )}
        </a>
      </div>
      <div className='d-flex flex-column'>
        <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {first_name ? first_name : '-'}

        </a>
      </div>
    </div>
)}

export {NameWithPhoto}
