import Branch from "./Branch"
import Project from "./Project"
import Portfolio from "./Portfolio"

const MapAreas = ({ name, ...props }) => {
  switch(name) {
    case 'branch':
      return <Branch {...props} />
    case 'project':
      return <Project {...props} />
    case 'portfolio':
      return <Portfolio {...props} />
    default:
      return
  }
}

export default MapAreas
