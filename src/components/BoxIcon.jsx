import book from 'boxicons/svg/regular/bx-book.svg?raw'
import buildings from 'boxicons/svg/regular/bx-buildings.svg?raw'
import checkShield from 'boxicons/svg/regular/bx-check-shield.svg?raw'
import chevronDown from 'boxicons/svg/regular/bx-chevron-down.svg?raw'
import cloud from 'boxicons/svg/regular/bx-cloud.svg?raw'
import cog from 'boxicons/svg/regular/bx-cog.svg?raw'
import collection from 'boxicons/svg/regular/bx-collection.svg?raw'
import copy from 'boxicons/svg/regular/bx-copy.svg?raw'
import data from 'boxicons/svg/regular/bx-data.svg?raw'
import dollar from 'boxicons/svg/regular/bx-dollar.svg?raw'
import errorCircle from 'boxicons/svg/regular/bx-error-circle.svg?raw'
import gitBranch from 'boxicons/svg/regular/bx-git-branch.svg?raw'
import globe from 'boxicons/svg/regular/bx-globe.svg?raw'
import globeAlt from 'boxicons/svg/regular/bx-globe-alt.svg?raw'
import homeAlt2 from 'boxicons/svg/regular/bx-home-alt-2.svg?raw'
import lineChart from 'boxicons/svg/regular/bx-line-chart.svg?raw'
import link from 'boxicons/svg/regular/bx-link.svg?raw'
import listCheck from 'boxicons/svg/regular/bx-list-check.svg?raw'
import lock from 'boxicons/svg/regular/bx-lock.svg?raw'
import lockAlt from 'boxicons/svg/regular/bx-lock-alt.svg?raw'
import networkChart from 'boxicons/svg/regular/bx-network-chart.svg?raw'
import play from 'boxicons/svg/regular/bx-play.svg?raw'
import rightArrowAlt from 'boxicons/svg/regular/bx-right-arrow-alt.svg?raw'
import rocket from 'boxicons/svg/regular/bx-rocket.svg?raw'
import save from 'boxicons/svg/regular/bx-save.svg?raw'
import server from 'boxicons/svg/regular/bx-server.svg?raw'
import shieldQuarter from 'boxicons/svg/regular/bx-shield-quarter.svg?raw'
import signal5 from 'boxicons/svg/regular/bx-signal-5.svg?raw'
import tachometer from 'boxicons/svg/regular/bx-tachometer.svg?raw'
import terminal from 'boxicons/svg/regular/bx-terminal.svg?raw'
import video from 'boxicons/svg/regular/bx-video.svg?raw'
import wrench from 'boxicons/svg/regular/bx-wrench.svg?raw'
import boltCircle from 'boxicons/svg/regular/bx-bolt-circle.svg?raw'
import docker from 'boxicons/svg/logos/bxl-docker.svg?raw'

const ICONS = {
  'bx-book': book,
  'bx-buildings': buildings,
  'bx-check-shield': checkShield,
  'bx-chevron-down': chevronDown,
  'bx-cloud': cloud,
  'bx-cog': cog,
  'bx-collection': collection,
  'bx-copy': copy,
  'bx-data': data,
  'bx-dollar': dollar,
  'bx-error-circle': errorCircle,
  'bx-git-branch': gitBranch,
  'bx-globe': globe,
  'bx-globe-alt': globeAlt,
  'bx-home-alt-2': homeAlt2,
  'bx-line-chart': lineChart,
  'bx-link': link,
  'bx-list-check': listCheck,
  'bx-lock': lock,
  'bx-lock-alt': lockAlt,
  'bx-network-chart': networkChart,
  'bx-play': play,
  'bx-right-arrow-alt': rightArrowAlt,
  'bx-rocket': rocket,
  'bx-save': save,
  'bx-server': server,
  'bx-shield-quarter': shieldQuarter,
  'bx-signal-5': signal5,
  'bx-tachometer': tachometer,
  'bx-terminal': terminal,
  'bx-video': video,
  'bx-wrench': wrench,
  'bx-bolt': boltCircle,
  'bxl-docker': docker,
}

function getIconKey(iconClass = '') {
  return iconClass
    .split(/\s+/)
    .find((token) => ICONS[token])
}

export default function BoxIcon({ iconClass, className = '' }) {
  const iconKey = getIconKey(iconClass)
  const svg = iconKey ? ICONS[iconKey] : null

  if (!svg) {
    return null
  }

  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center align-middle leading-none [&>svg]:block [&>svg]:h-[1em] [&>svg]:w-[1em] [&>svg]:fill-current ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
