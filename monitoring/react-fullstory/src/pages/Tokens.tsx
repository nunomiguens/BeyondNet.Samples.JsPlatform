import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport
} from '@material-ui/data-grid'
import { useDemoData } from '@material-ui/x-grid-data-generator'

import * as FullStory from '@fullstory/browser'
import { fs_org } from '../models/constants'

FullStory.init({ orgId: fs_org })

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
