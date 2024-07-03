import { FC } from 'react';

type Props = {
  title?: string;
};

const PageTitle: FC<Props> = ({ title }) => {
  if (!title) {
    return null; // Return null if no title is provided
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <p className='fw-bolder m-0' style={{ color: 'white', display: 'inline-block' }}>
        
      </p>
    </div>
  );
};

export { PageTitle };
