import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport
} from '@material-ui/data-grid'
import { useDemoData } from '@material-ui/x-grid-data-generator'

import { hotjar } from 'react-hotjar'
import { hjid, hjsv } from '../models/constants'

hotjar.initialize(hjid, hjsv)

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  )
}

const Tokens = (): JSX.Element => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 4,
    maxColumns: 6
  })

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        {...data}
        components={{
          Toolbar: CustomToolbar
        }}
      />
    </div>
  )
}

export default Tokens
