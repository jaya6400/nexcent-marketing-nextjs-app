'use client'

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'

const Logo = (props: any) => {
  return (
    <svg width="155" height="24" viewBox="0 0 155 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.7863 13.134L13.3954 22.3669L8.00448 13.134H18.7863ZM20.2305 12.3088H6.55444L13.3954 24L20.2305 12.3088Z" fill="#263238"/>
<path d="M28.1591 1.65038L33.55 10.8833H22.7681L28.1591 1.65038ZM28.1591 0L21.3181 11.6912H35L28.1591 0Z" fill="#263238"/>
<path d="M0 0L5.7359 10.3409L12.0038 0.259661L0 0Z" fill="#4CAF4F"/>
<path d="M13.3955 0.905884L19.4121 11.189H7.36728L13.3955 0.905884Z" fill="#4CAF4F"/>
<path d="M20.9615 13.434L26.9839 24H14.6526L20.7744 13.434H20.9615Z" fill="#4CAF4F"/>
<path d="M22.2653 12.7935L28.1591 23.1978L34.1347 12.7935H22.2653Z" fill="#4CAF4F"/>
<path d="M60.0327 1.66901V22.0326H56.3139L47.4545 9.21588H47.3054V22.0326H43V1.66901H46.7784L55.5682 14.4758H55.7472V1.66901H60.0327Z" fill="#263238"/>
<path d="M70.4705 22.3309C68.8995 22.3309 67.5472 22.0128 66.4137 21.3764C65.2868 20.7334 64.4184 19.8253 63.8086 18.652C63.1987 17.472 62.8938 16.0767 62.8938 14.4659C62.8938 12.8949 63.1987 11.5161 63.8086 10.3295C64.4184 9.14297 65.2769 8.21825 66.3839 7.55537C67.4975 6.89249 68.8034 6.56105 70.3015 6.56105C71.3091 6.56105 72.247 6.72346 73.1154 7.04827C73.9904 7.36645 74.7527 7.84704 75.4023 8.49003C76.0586 9.13302 76.569 9.94173 76.9336 10.9162C77.2982 11.884 77.4805 13.0175 77.4805 14.3167V15.4801H64.5842V12.8551H73.4933C73.4933 12.2452 73.3607 11.705 73.0955 11.2343C72.8304 10.7637 72.4625 10.3958 71.9918 10.1307C71.5278 9.85887 70.9876 9.72298 70.3711 9.72298C69.7281 9.72298 69.158 9.87213 68.6609 10.1704C68.1703 10.4621 67.7859 10.8565 67.5075 11.3537C67.229 11.8442 67.0865 12.3911 67.0799 12.9943V15.49C67.0799 16.2457 67.2191 16.8986 67.4975 17.4488C67.7826 17.999 68.1836 18.4233 68.7006 18.7216C69.2177 19.0199 69.8308 19.169 70.5401 19.169C71.0108 19.169 71.4416 19.1027 71.8327 18.9701C72.2238 18.8376 72.5586 18.6387 72.837 18.3736C73.1154 18.1084 73.3275 17.7836 73.4734 17.3991L77.391 17.6576C77.1921 18.5989 76.7844 19.4209 76.168 20.1236C75.5581 20.8196 74.7693 21.3631 73.8015 21.7542C72.8403 22.1387 71.73 22.3309 70.4705 22.3309Z" fill="#263238"/>
<path d="M83.511 6.75992L86.315 12.0994L89.1886 6.75992H93.5337L89.109 14.3963L93.6531 22.0326H89.3278L86.315 16.7528L83.3519 22.0326H78.9769L83.511 14.3963L79.136 6.75992H83.511Z" fill="#263238"/>
<path d="M102.403 22.3309C100.839 22.3309 99.493 21.9995 98.3661 21.3366C97.2459 20.6671 96.3841 19.7391 95.7809 18.5525C95.1843 17.366 94.886 16.0004 94.886 14.4559C94.886 12.8915 95.1876 11.5194 95.7908 10.3395C96.4007 9.15291 97.2657 8.22819 98.386 7.56531C99.5063 6.89581 100.839 6.56105 102.383 6.56105C103.716 6.56105 104.882 6.803 105.883 7.2869C106.884 7.77081 107.676 8.45026 108.26 9.32526C108.843 10.2003 109.164 11.2277 109.224 12.4076H105.227C105.114 11.6453 104.816 11.0322 104.332 10.5682C103.855 10.0975 103.228 9.86219 102.453 9.86219C101.797 9.86219 101.223 10.0412 100.733 10.3991C100.249 10.7504 99.8709 11.2642 99.5991 11.9403C99.3273 12.6165 99.1914 13.4351 99.1914 14.3963C99.1914 15.3707 99.324 16.1993 99.5891 16.8821C99.8609 17.5648 100.242 18.0852 100.733 18.4432C101.223 18.8011 101.797 18.9801 102.453 18.9801C102.937 18.9801 103.371 18.8807 103.755 18.6818C104.146 18.4829 104.468 18.1946 104.72 17.8167C104.978 17.4323 105.147 16.9716 105.227 16.4346H109.224C109.158 17.6013 108.84 18.6288 108.27 19.517C107.706 20.3986 106.927 21.088 105.933 21.5852C104.939 22.0824 103.762 22.3309 102.403 22.3309Z" fill="#263238"/>
<path d="M118.896 22.3309C117.325 22.3309 115.973 22.0128 114.839 21.3764C113.713 20.7334 112.844 19.8253 112.234 18.652C111.625 17.472 111.32 16.0767 111.32 14.4659C111.32 12.8949 111.625 11.5161 112.234 10.3295C112.844 9.14297 113.703 8.21825 114.81 7.55537C115.923 6.89249 117.229 6.56105 118.727 6.56105C119.735 6.56105 120.673 6.72346 121.541 7.04827C122.416 7.36645 123.179 7.84704 123.828 8.49003C124.484 9.13302 124.995 9.94173 125.359 10.9162C125.724 11.884 125.906 13.0175 125.906 14.3167V15.4801H113.01V12.8551H121.919C121.919 12.2452 121.786 11.705 121.521 11.2343C121.256 10.7637 120.888 10.3958 120.418 10.1307C119.954 9.85887 119.413 9.72298 118.797 9.72298C118.154 9.72298 117.584 9.87213 117.087 10.1704C116.596 10.4621 116.212 10.8565 115.933 11.3537C115.655 11.8442 115.512 12.3911 115.506 12.9943V15.49C115.506 16.2457 115.645 16.8986 115.923 17.4488C116.208 17.999 116.609 18.4233 117.126 18.7216C117.643 19.0199 118.257 19.169 118.966 19.169C119.437 19.169 119.867 19.1027 120.259 18.9701C120.65 18.8376 120.984 18.6387 121.263 18.3736C121.541 18.1084 121.753 17.7836 121.899 17.3991L125.817 17.6576C125.618 18.5989 125.21 19.4209 124.594 20.1236C123.984 20.8196 123.195 21.3631 122.227 21.7542C121.266 22.1387 120.156 22.3309 118.896 22.3309Z" fill="#263238"/>
<path d="M132.906 13.2031V22.0326H128.67V6.75992H132.707V9.45452H132.886C133.224 8.56626 133.791 7.86361 134.587 7.34656C135.382 6.82289 136.347 6.56105 137.48 6.56105C138.541 6.56105 139.465 6.79306 140.254 7.25708C141.043 7.72109 141.656 8.38397 142.094 9.24571C142.531 10.1008 142.75 11.1217 142.75 12.3082V22.0326H138.514V13.0639C138.521 12.1292 138.282 11.4001 137.798 10.8764C137.314 10.3461 136.648 10.0809 135.8 10.0809C135.23 10.0809 134.726 10.2036 134.288 10.4488C133.857 10.6941 133.519 11.0521 133.274 11.5227C133.036 11.9867 132.913 12.5468 132.906 13.2031Z" fill="#263238"/>
<path d="M154.212 6.75992V9.94173H145.015V6.75992H154.212ZM147.103 3.10083H151.338V17.3395C151.338 17.7306 151.398 18.0355 151.517 18.2542C151.637 18.4664 151.802 18.6155 152.015 18.7017C152.233 18.7879 152.485 18.8309 152.77 18.8309C152.969 18.8309 153.168 18.8144 153.367 18.7812C153.566 18.7415 153.718 18.7116 153.824 18.6917L154.49 21.8437C154.278 21.91 153.98 21.9862 153.596 22.0724C153.211 22.1652 152.744 22.2216 152.194 22.2415C151.173 22.2812 150.278 22.1453 149.509 21.8338C148.747 21.5222 148.153 21.0383 147.729 20.3821C147.305 19.7258 147.096 18.8972 147.103 17.8963V3.10083Z" fill="#263238"/>
</svg>
    // <svg height={32} viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg" {...props}>
    //   <path
    //     d="M34.87 8.07H37.87V20.2H34.87V8.07ZM39.06 15.62C39.06 12.62 40.9 10.83 43.74 10.83C46.58 10.83 48.42 12.62 48.42 15.62C48.42 18.62 46.62 20.42 43.74 20.42C40.86 20.42 39.06 18.67 39.06 15.62ZM45.41 15.62C45.41 13.97 44.76 13 43.74 13C42.72 13 42.08 14 42.08 15.62C42.08 17.24 42.71 18.22 43.74 18.22C44.77 18.22 45.41 17.3 45.41 15.63V15.62ZM49.55 20.79H52.43C52.5671 21.0945 52.7988 21.3466 53.0907 21.5088C53.3826 21.6709 53.7191 21.7345 54.05 21.69C55.19 21.69 55.79 21.07 55.79 20.17V18.49H55.73C55.491 19.0049 55.1031 19.4363 54.6165 19.7287C54.1299 20.021 53.5668 20.1608 53 20.13C50.81 20.13 49.36 18.46 49.36 15.59C49.36 12.72 50.74 10.91 53.04 10.91C53.6246 10.8871 54.2022 11.0434 54.6955 11.3579C55.1888 11.6725 55.5742 12.1303 55.8 12.67V12.67V11H58.8V20.1C58.8 22.29 56.87 23.65 54.02 23.65C51.37 23.65 49.72 22.46 49.55 20.8V20.79ZM55.8 15.61C55.8 14.15 55.13 13.23 54.07 13.23C53.01 13.23 52.36 14.14 52.36 15.61C52.36 17.08 53 17.91 54.07 17.91C55.14 17.91 55.8 17.1 55.8 15.62V15.61ZM59.93 15.61C59.93 12.61 61.77 10.82 64.61 10.82C67.45 10.82 69.3 12.61 69.3 15.61C69.3 18.61 67.5 20.41 64.61 20.41C61.72 20.41 59.93 18.67 59.93 15.62V15.61ZM66.28 15.61C66.28 13.96 65.63 12.99 64.61 12.99C63.59 12.99 63 14 63 15.63C63 17.26 63.63 18.23 64.65 18.23C65.67 18.23 66.28 17.3 66.28 15.63V15.61ZM70.44 8.82C70.4321 8.51711 70.5144 8.2187 70.6763 7.96261C70.8383 7.70651 71.0726 7.50427 71.3496 7.38151C71.6266 7.25875 71.9338 7.221 72.2323 7.27305C72.5308 7.32511 72.8071 7.46462 73.0262 7.67389C73.2454 7.88317 73.3974 8.1528 73.4631 8.44859C73.5288 8.74438 73.5052 9.05301 73.3952 9.33536C73.2853 9.61772 73.094 9.86108 72.8456 10.0346C72.5973 10.2081 72.3029 10.304 72 10.31C71.7992 10.3238 71.5977 10.2959 71.4082 10.2281C71.2186 10.1603 71.0452 10.0541 70.8987 9.91601C70.7522 9.77796 70.6358 9.61111 70.5569 9.42594C70.4779 9.24077 70.4381 9.04128 70.44 8.84V8.82ZM70.44 11.02H73.44V20.2H70.44V11.02ZM84.33 15.61C84.33 18.61 83 20.32 80.72 20.32C80.1354 20.3575 79.5533 20.2146 79.0525 19.9106C78.5517 19.6065 78.1564 19.156 77.92 18.62H77.86V23.14H74.86V11H77.86V12.64H77.92C78.1454 12.0951 78.5332 11.6329 79.0306 11.3162C79.528 10.9995 80.1109 10.8437 80.7 10.87C83 10.91 84.37 12.63 84.37 15.63L84.33 15.61ZM81.33 15.61C81.33 14.15 80.66 13.22 79.61 13.22C78.56 13.22 77.89 14.16 77.88 15.61C77.87 17.06 78.56 17.99 79.61 17.99C80.66 17.99 81.33 17.08 81.33 15.63V15.61ZM89.48 10.81C91.97 10.81 93.48 11.99 93.55 13.88H90.82C90.82 13.23 90.28 12.82 89.45 12.82C88.62 12.82 88.25 13.14 88.25 13.61C88.25 14.08 88.58 14.23 89.25 14.37L91.17 14.76C93 15.15 93.78 15.89 93.78 17.28C93.78 19.18 92.05 20.4 89.5 20.4C86.95 20.4 85.28 19.18 85.15 17.31H88.04C88.13 17.99 88.67 18.39 89.55 18.39C90.43 18.39 90.83 18.1 90.83 17.62C90.83 17.14 90.55 17.04 89.83 16.89L88.1 16.52C86.31 16.15 85.37 15.2 85.37 13.8C85.39 12 87 10.83 89.48 10.83V10.81ZM103.79 20.18H100.9V18.47H100.84C100.681 19.0441 100.331 19.5466 99.8468 19.8941C99.3629 20.2415 98.7748 20.413 98.18 20.38C97.7242 20.4059 97.2682 20.3337 96.8427 20.1682C96.4172 20.0027 96.0322 19.7479 95.7137 19.4208C95.3952 19.0938 95.1505 18.7021 94.9964 18.2724C94.8422 17.8427 94.7821 17.3849 94.82 16.93V11H97.82V16.24C97.82 17.33 98.38 17.91 99.31 17.91C99.5281 17.9104 99.7437 17.8643 99.9425 17.7746C100.141 17.6849 100.319 17.5537 100.463 17.3899C100.606 17.226 100.714 17.0333 100.777 16.8247C100.84 16.616 100.859 16.3962 100.83 16.18V11H103.83L103.79 20.18ZM105.24 11H108.14V12.77H108.2C108.359 12.2035 108.702 11.7057 109.174 11.3547C109.646 11.0037 110.222 10.8191 110.81 10.83C111.409 10.7821 112.003 10.9612 112.476 11.3318C112.948 11.7024 113.264 12.2372 113.36 12.83H113.42C113.601 12.2309 113.977 11.7093 114.488 11.3472C114.998 10.9851 115.615 10.8031 116.24 10.83C116.648 10.8163 117.054 10.8886 117.432 11.0422C117.811 11.1957 118.152 11.4272 118.435 11.7214C118.718 12.0157 118.936 12.3662 119.075 12.7501C119.213 13.134 119.27 13.5429 119.24 13.95V20.2H116.24V14.75C116.24 13.75 115.79 13.29 114.95 13.29C114.763 13.2884 114.577 13.327 114.406 13.4032C114.235 13.4794 114.082 13.5914 113.958 13.7317C113.834 13.872 113.741 14.0372 113.686 14.2163C113.631 14.3955 113.616 14.5843 113.64 14.77V20.2H110.79V14.71C110.79 13.79 110.34 13.29 109.52 13.29C109.331 13.2901 109.143 13.3303 108.971 13.408C108.798 13.4858 108.643 13.5993 108.518 13.741C108.392 13.8827 108.298 14.0495 108.241 14.2304C108.185 14.4112 108.167 14.6019 108.19 14.79V20.2H105.19L105.24 11Z"
    //     fill="currentColor"
    //   />
    //   <path
    //     d="M26.48 8.62001C25.9711 7.45637 25.2975 6.37195 24.48 5.40001C23.2714 3.92035 21.7632 2.71341 20.0546 1.85862C18.346 1.00383 16.4758 0.520582 14.567 0.440674C12.6582 0.360766 10.7541 0.68601 8.98 1.395C7.20594 2.104 5.60214 3.18067 4.27417 4.55414C2.94619 5.92762 1.92414 7.56676 1.27529 9.36369C0.626436 11.1606 0.365493 13.0746 0.509634 14.9796C0.653775 16.8847 1.19973 18.7376 2.11157 20.4164C3.02341 22.0953 4.28046 23.562 5.79998 24.72C6.77498 25.4779 7.85233 26.094 8.99998 26.55C10.609 27.2094 12.3311 27.549 14.07 27.55C17.6594 27.5421 21.0992 26.1113 23.6354 23.5713C26.1717 21.0314 27.5973 17.5894 27.6 14C27.6026 12.1485 27.2213 10.3166 26.48 8.62001V8.62001ZM14.06 3.19001C15.6215 3.18984 17.1642 3.53115 18.58 4.19001V4.19001C18.2347 4.33918 17.8718 4.44337 17.5 4.50001C16.2766 4.67711 15.1432 5.24509 14.2691 6.11918C13.3951 6.99328 12.8271 8.12661 12.65 9.35001C12.5722 10.0361 12.2602 10.6744 11.7665 11.1572C11.2728 11.64 10.6277 11.9377 9.93998 12C8.71657 12.1771 7.58324 12.7451 6.70915 13.6192C5.83505 14.4933 5.26707 15.6266 5.08998 16.85C5.03002 17.5024 4.75167 18.1155 4.29998 18.59V18.59C3.52063 16.9433 3.17053 15.1261 3.28225 13.3077C3.39397 11.4893 3.96388 9.72871 4.93895 8.18976C5.91401 6.65081 7.26255 5.38353 8.85905 4.50586C10.4555 3.62819 12.2481 3.16865 14.07 3.17001L14.06 3.19001ZM5.78998 21C5.90998 20.89 6.02998 20.79 6.14998 20.67C7.03963 19.8075 7.61069 18.6689 7.76998 17.44C7.83456 16.7493 8.14298 16.1041 8.63998 15.62C9.11822 15.1222 9.76195 14.8163 10.45 14.76C11.6734 14.5829 12.8067 14.0149 13.6808 13.1408C14.5549 12.2667 15.1229 11.1334 15.3 9.91001C15.3432 9.18752 15.6533 8.50685 16.17 8.00001C16.66 7.51186 17.3099 7.21711 18 7.17001C19.1239 7.01537 20.1721 6.51573 21 5.74001C21.9426 6.52208 22.7413 7.46291 23.36 8.52001C23.322 8.57136 23.2784 8.61832 23.23 8.66001C22.7526 9.16221 22.1098 9.47477 21.42 9.54001C20.1953 9.71401 19.0603 10.281 18.1856 11.1557C17.311 12.0303 16.744 13.1654 16.57 14.39C16.4995 15.0784 16.1932 15.7213 15.7029 16.2098C15.2127 16.6982 14.5687 17.0021 13.88 17.07C12.653 17.2458 11.5154 17.8126 10.6363 18.6863C9.75713 19.5601 9.18328 20.6941 8.99998 21.92C8.94616 22.4087 8.77832 22.878 8.50998 23.29C7.48397 22.6808 6.56506 21.9072 5.78998 21V21ZM14.06 24.86C13.0452 24.8611 12.0354 24.7197 11.06 24.44C11.3936 23.818 11.6106 23.1402 11.7 22.44C11.7701 21.7531 12.0749 21.1114 12.5632 20.6232C13.0514 20.135 13.6931 19.8301 14.38 19.76C15.6052 19.5849 16.7408 19.0178 17.6168 18.1435C18.4929 17.2693 19.0624 16.1349 19.24 14.91C19.3101 14.2231 19.6149 13.5814 20.1032 13.0932C20.5914 12.605 21.2331 12.3001 21.92 12.23C22.842 12.1101 23.7208 11.7668 24.48 11.23C24.9015 12.8279 24.9515 14.5012 24.626 16.1214C24.3004 17.7416 23.6081 19.2657 22.6021 20.5768C21.5961 21.8879 20.3031 22.9511 18.8224 23.6849C17.3417 24.4187 15.7125 24.8036 14.06 24.81V24.86Z"
    //     fill="#2F855A"
    //   />
    // </svg>
  )
}

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>© 2022 Chakra Templates. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={'#'}>
              About us
            </Box>
            <Box as="a" href={'#'}>
              Blog
            </Box>
            <Box as="a" href={'#'}>
              Contact us
            </Box>
            <Box as="a" href={'#'}>
              Pricing
            </Box>
            <Box as="a" href={'#'}>
              Testimonials
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Box as="a" href={'#'}>
              Help Center
            </Box>
            <Box as="a" href={'#'}>
              Terms of Service
            </Box>
            <Box as="a" href={'#'}>
              Legal
            </Box>
            <Box as="a" href={'#'}>
              Privacy Policy
            </Box>
            <Box as="a" href={'#'}>
              Satus
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('green.400', 'green.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'green.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
