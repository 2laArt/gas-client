import { FC } from 'react'
import { Button } from 'shared/ui/button'

const index: FC = () => {
  return (
    <div>
      <Button loading size="regular" color="blue" disabled>
        Hello
      </Button>
    </div>
  )
}

export default index
