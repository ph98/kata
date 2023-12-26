// eslint-disable-next-line camelcase
import { IBM_Plex_Sans, Lato } from "next/font/google"

import './_fonts.scss';

const ibmPlexSans = IBM_Plex_Sans({
    weight: [
      '400',
      '500',
      '700'
    ],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-ibm-plex'
  })
  
  const lato = Lato({
    weight: [
      '400'
    ],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-lato'
  })

export {ibmPlexSans, lato}