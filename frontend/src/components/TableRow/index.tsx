import NotificationButton from '../NotificationButton'
import { TableData, Row, IconWrapper } from './styles'

interface ITableRow {
  isHeader?: boolean,
  titles: string[]
}

const TableRow = ({ isHeader = false, titles}: ITableRow) => (
  <Row>
    {isHeader ? 
      titles.map(title => <th key={Math.random()}>{title}</th>)
      :
      titles.map(title => <TableData key={Math.random()}>{title}</TableData>)
    }
    {!!!isHeader && 
    (
      <IconWrapper>
        <NotificationButton id={titles[0]} />
      </IconWrapper>
    )}
  </Row>
)

export default TableRow