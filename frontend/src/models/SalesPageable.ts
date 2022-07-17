import Sale from "./Sale"

type SalesPageable = {
  content: Sale[],
  size: number,
  totalElements: number,
  totalPages: number
}

export default SalesPageable