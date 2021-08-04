import { DataGrid, GridToolbar } from '@material-ui/data-grid'
import { useDemoData } from '@material-ui/x-grid-data-generator'

import { hotjar } from 'react-hotjar'
import { hjid, hjsv } from '../models/constants'

hotjar.initialize(hjid, hjsv)

const Profiles = (): JSX.Element => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6
  })

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...data}
        components={{
          Toolbar: GridToolbar
        }}
      />
    </div>
  )
}

export default Profiles
