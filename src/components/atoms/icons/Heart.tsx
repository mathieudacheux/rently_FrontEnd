export default function Heart({
  marginRight,
  marginLeft,
  color,
}: {
  marginRight?: boolean
  marginLeft?: boolean
  color?: boolean
}): JSX.Element {
  return (
    <>
      {color ? (
        <div
          className={`h-4 ${marginLeft ? 'ml-1' : ''} ${
            marginRight ? 'mr-1' : ''
          }`}
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 41 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='Iconly/Light-Outline/Heart'>
              <g id='Heart'>
                <path
                  id='Combined-Shape'
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M20.4699 2.07824C23.7219 0.0222363 28.0419 -0.545764 31.7739 0.650236C39.8919 3.26824 42.4119 12.1182 40.1579 19.1602C36.6799 30.2202 21.8259 38.4702 21.1959 38.8162C20.9719 38.9402 20.7239 39.0022 20.4759 39.0022C20.2279 39.0022 19.9819 38.9422 19.7579 38.8202C19.1319 38.4782 4.38591 30.3502 0.791913 19.1622L0.789913 19.1602C-1.46609 12.1162 1.04591 3.26424 9.15591 0.650236C12.9639 -0.581764 17.1139 -0.0397637 20.4699 2.07824ZM10.0759 3.50624C3.51391 5.62224 1.86591 12.6802 3.64791 18.2462C6.45191 26.9702 17.5299 34.0242 20.4739 35.7702C23.4279 34.0062 34.5859 26.8742 37.2999 18.2542C39.0819 12.6822 37.4279 5.62424 30.8559 3.50624C27.6719 2.48424 23.9579 3.10624 21.3939 5.09024C20.8579 5.50224 20.1139 5.51024 19.5739 5.10224C16.8579 3.06024 13.3099 2.46224 10.0759 3.50624ZM28.9359 7.47804C31.6619 8.36004 33.5719 10.774 33.8059 13.628C33.8719 14.454 33.2579 15.178 32.4319 15.244C32.3899 15.248 32.3499 15.25 32.3079 15.25C31.5339 15.25 30.8779 14.656 30.8139 13.872C30.6819 12.228 29.5819 10.84 28.0159 10.334C27.2259 10.078 26.7939 9.23204 27.0479 8.44604C27.3059 7.65804 28.1439 7.23004 28.9359 7.47804Z'
                  fill='#4A43EC'
                />
              </g>
            </g>
          </svg>
        </div>
      ) : (
        <div
          className={`h-4 ${marginLeft ? 'ml-1' : ''} ${
            marginRight ? 'mr-1' : ''
          }`}
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 41 40'
            fill='grey'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='Iconly/Light-Outline/Heart'>
              <g id='Heart'>
                <path
                  id='Combined-Shape'
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M20.4699 2.07824C23.7219 0.0222363 28.0419 -0.545764 31.7739 0.650236C39.8919 3.26824 42.4119 12.1182 40.1579 19.1602C36.6799 30.2202 21.8259 38.4702 21.1959 38.8162C20.9719 38.9402 20.7239 39.0022 20.4759 39.0022C20.2279 39.0022 19.9819 38.9422 19.7579 38.8202C19.1319 38.4782 4.38591 30.3502 0.791913 19.1622L0.789913 19.1602C-1.46609 12.1162 1.04591 3.26424 9.15591 0.650236C12.9639 -0.581764 17.1139 -0.0397637 20.4699 2.07824ZM10.0759 3.50624C3.51391 5.62224 1.86591 12.6802 3.64791 18.2462C6.45191 26.9702 17.5299 34.0242 20.4739 35.7702C23.4279 34.0062 34.5859 26.8742 37.2999 18.2542C39.0819 12.6822 37.4279 5.62424 30.8559 3.50624C27.6719 2.48424 23.9579 3.10624 21.3939 5.09024C20.8579 5.50224 20.1139 5.51024 19.5739 5.10224C16.8579 3.06024 13.3099 2.46224 10.0759 3.50624ZM28.9359 7.47804C31.6619 8.36004 33.5719 10.774 33.8059 13.628C33.8719 14.454 33.2579 15.178 32.4319 15.244C32.3899 15.248 32.3499 15.25 32.3079 15.25C31.5339 15.25 30.8779 14.656 30.8139 13.872C30.6819 12.228 29.5819 10.84 28.0159 10.334C27.2259 10.078 26.7939 9.23204 27.0479 8.44604C27.3059 7.65804 28.1439 7.23004 28.9359 7.47804Z'
                  fill='#F45252'
                />
              </g>
            </g>
          </svg>
        </div>
      )}
    </>
  )
}
