import { useContainer as useRoutingContainer } from 'routing-controllers'
import { Container } from 'typedi'

export default () => {
  useRoutingContainer(Container)
}
