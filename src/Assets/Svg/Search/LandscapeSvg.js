import { Colors, moderateScale } from '@/Theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const SvgComponent = ({ size = 24, color = Colors.black }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 473.508 473.508"
    width={moderateScale(size)}
    height={moderateScale(size)}
    xmlSpace="preserve"
  >
    <Path
      fill={color}
      d="M350.504 73.738V57.165c0-8.284-6.716-15-15-15s-15 6.716-15 15V73.73c-69.051 5.984-123.038 53.391-123.083 110.807 0 4.047 3.165 7.388 7.18 7.605.15.009.302.013.454.013 2.108 0 4.132-.846 5.542-2.309 8.773-9.041 20.529-14.021 33.101-14.021 12.518.007 24.233 4.935 32.983 13.872a7.654 7.654 0 0 0 5.444 2.292 7.623 7.623 0 0 0 4.965-1.842c9.614-8.273 21.14-13.949 33.413-16.624v144.391H14.539C6.522 317.915 0 324.436 0 332.451s6.522 14.536 14.539 14.536h127.125c7.465 0 13.539 6.072 13.539 13.536 0 7.467-6.074 13.542-13.539 13.542H88.248c-8.019 0-14.542 6.521-14.542 14.536 0 8.017 6.523 14.539 14.542 14.539h91.639c5.606 1.656 9.711 6.842 9.711 12.977 0 7.467-6.074 13.542-13.539 13.542H53.813c-8.019 0-14.542 6.521-14.542 14.536 0 8.017 6.523 14.539 14.542 14.539h271.561c8.016 0 14.536-6.522 14.536-14.539 0-8.015-6.521-14.536-14.536-14.536h-19.112c-7.464 0-13.536-6.075-13.536-13.542 0-6.134 4.105-11.32 9.709-12.977h80.43c8.016 0 14.536-6.522 14.536-14.539 0-8.015-6.521-14.536-14.536-14.536h-88.553c-7.464 0-13.536-6.075-13.536-13.542 0-7.464 6.072-13.536 13.536-13.536H434.3c8.019 0 14.542-6.521 14.542-14.536s-6.523-14.536-14.542-14.536h-83.797V173.54c12.245 2.682 23.741 8.35 33.33 16.603a7.605 7.605 0 0 0 4.968 1.847 7.577 7.577 0 0 0 5.448-2.29c8.746-8.939 20.46-13.867 32.982-13.874 12.57 0 24.327 4.979 33.091 14.007 1.515 1.573 3.742 2.425 5.979 2.311a7.62 7.62 0 0 0 7.205-7.611c-.045-57.39-53.992-104.782-123.002-110.795zM22.947 115.963h22.601a50.549 50.549 0 0 0 3.639 8.737l-15.996 15.996c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394l15.996-15.996a50.516 50.516 0 0 0 8.737 3.639v22.601c0 8.284 6.716 15 15 15s15-6.716 15-15v-22.601a50.506 50.506 0 0 0 8.736-3.639l15.996 15.996c2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213L139.086 124.7a50.516 50.516 0 0 0 3.639-8.737h22.601c8.284 0 15-6.716 15-15s-6.716-15-15-15h-22.601a50.506 50.506 0 0 0-3.639-8.736l15.996-15.996c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-15.996 15.996a50.506 50.506 0 0 0-8.736-3.639V29.773c0-8.284-6.716-15-15-15s-15 6.716-15 15v22.601a50.549 50.549 0 0 0-8.737 3.639L54.405 40.018c-5.857-5.858-15.355-5.858-21.213 0-5.858 5.858-5.858 15.355 0 21.213l15.996 15.996a50.506 50.506 0 0 0-3.639 8.736H22.947c-8.284 0-15 6.716-15 15s6.716 15 15 15z"
    />
  </Svg>
)

export default SvgComponent
