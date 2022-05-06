import { Map } from 'pigeon-maps'

const MyMap = ( {info} ) => {
  return (
    <Map 
      height={300}
      center={[info.location.lat, info.location.lng]} 
      zoom={11}  
    />
  )
}

export default MyMap;