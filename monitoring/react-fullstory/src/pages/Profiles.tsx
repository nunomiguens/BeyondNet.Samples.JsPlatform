import { DataGrid, GridToolbar } from '@material-ui/data-grid'
import { useDemoData } from '@material-ui/x-grid-data-generator'
import * as FullStory from '@fullstory/browser'
import { fs_org } from '../models/constants'

FullStory.init({ orgId: fs_org })

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
