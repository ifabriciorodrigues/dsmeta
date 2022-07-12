import NotificationButton from '../NotificationButton'
import { TableData, Row, IconWrapper } from './styles'

interface ITableRow {
  isHeader?: boolean,
  titles: string[]
}

const TableRow = ({ isHeader = false, titles}: ITableRow) => (
  <Row>
    {isHeader ? 
      titles.map(title => <th>{title}</th>)
      :
      titles.map(title => <TableData>{title}</TableData>)
    }
    {!!!isHeader && 
    (
      <IconWrapper>
        <NotificationButton />
      </IconWrapper>
    )}
  </Row>
)

export default TableRow