import { DataGrid } from '@material-ui/data-grid'
import { useDemoData } from '@material-ui/x-grid-data-generator'
import { hotjar } from 'react-hotjar'
import { hjid, hjsv } from '../models/constants'

hotjar.initialize(hjid, hjsv)

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
