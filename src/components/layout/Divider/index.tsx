import { ReactElement } from 'react'

const style = {
  borderRight: `solid 2px #eea62b`,
  height: '100%',
}

const Divider = ({ className }: { className?: string }): ReactElement => <div className={className} style={style} />

export default Divider
