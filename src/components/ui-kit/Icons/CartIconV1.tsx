import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const CartIconV1: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4.5C3 4.08579 3.33579 3.75 3.75 3.75H5.45825C6.02565 3.75 6.54449 4.07016 6.79895 4.5773L10.2917 11.5385H16.3418L18.9554 6.98077H10.2632C9.84894 6.98077 9.51316 6.64498 9.51316 6.23077C9.51316 5.81656 9.84894 5.48077 10.2632 5.48077H18.9554C20.1081 5.48077 20.83 6.72695 20.2566 7.72694L17.6431 12.2846C17.3757 12.7509 16.8793 13.0385 16.3418 13.0385H10.2917L9.30754 15L18.6316 15C19.0458 15 19.3816 15.3358 19.3816 15.75C19.3816 16.1642 19.0458 16.5 18.6316 16.5H9.30754C8.19154 16.5 7.46635 15.3248 7.96684 14.3273L8.98983 12.2885L5.45825 5.25H3.75C3.33579 5.25 3 4.91421 3 4.5Z"
      />
      <path d="M8.25 18.75C8.25 17.9216 8.92157 17.25 9.75 17.25C10.5784 17.25 11.25 17.9216 11.25 18.75C11.25 19.5784 10.5784 20.25 9.75 20.25C8.92157 20.25 8.25 19.5784 8.25 18.75Z" />
      <path d="M15.75 18.75C15.75 17.9216 16.4216 17.25 17.25 17.25C18.0784 17.25 18.75 17.9216 18.75 18.75C18.75 19.5784 18.0784 20.25 17.25 20.25C16.4216 20.25 15.75 19.5784 15.75 18.75Z" />
    </SvgIcon>
  );
};

export default CartIconV1;
