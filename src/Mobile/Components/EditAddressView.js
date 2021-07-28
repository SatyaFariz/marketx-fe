import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import CenterMarker from '../../assets/marker.svg'
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))

const Component = props => {
  return (
    <div style={{
      height: '100%',
      position: 'relative',
    }}>
      <MyMapComponent 
        isMarkerShown={false} 
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      <div 
      
      style={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        zIndex: 9999999,
        top: 0,
        left:0,
        pointerEvents: 'none'
      }}>
        <div style={{ 
          position: 'relative', 
          width: 0,
          height: 0,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          flexDirection: 'row'
        }}>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="186.000000pt" height="327.000000pt" viewBox="0 0 186.000000 327.000000"
            preserveAspectRatio="xMidYMid meet" style={{
            //transform: 'scale(0.1)',
              position: 'absolute',
              height: 40,
            }}>
            <metadata>
            Created by potrace 1.15, written by Peter Selinger 2001-2017
            </metadata>
            <g transform="translate(0.000000,327.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none">
            <path d="M787 3230 c-425 -77 -740 -426 -764 -846 -10 -169 21 -313 100 -470
            122 -243 367 -426 637 -478 l65 -12 5 -700 5 -699 95 0 95 0 5 700 5 700 48 7
            c252 36 504 212 638 446 166 290 157 661 -23 939 -123 189 -304 324 -525 389
            -69 20 -116 27 -213 29 -69 2 -147 0 -173 -5z"/>
            </g>
            </svg>
        </div>
      </div>
    </div>
  )
}

export default Component