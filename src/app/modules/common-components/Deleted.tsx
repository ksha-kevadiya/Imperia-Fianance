import {FC} from 'react'

type Props = {
  is_deleted?: boolean
}

const Deleted: FC<Props> = ({is_deleted}) => (
  <>
    <div className={`badge badge-light-${is_deleted ? 'danger': 'success'} fw-bolder`}>
      {is_deleted ? 'Yes' : 'No'}
    </div>
  </>
)

export {Deleted}
