import { DataGrid } from '@material-ui/data-grid'
import { useDemoData } from '@material-ui/x-grid-data-generator'
import { fs_org } from '../models/constants'

import * as FullStory from '@fullstory/browser'

FullStory.init({ orgId: fs_org })

const Users = (): JSX.Element => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6
  })

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...data}
        filterModel={{
          items: [
            {
              columnField: 'commodity',
              operatorValue: 'contains',
              value: 'rice'
            }
          ]
        }}
      />
    </div>
  )
}

export default Users
