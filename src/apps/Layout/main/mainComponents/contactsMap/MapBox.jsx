import React from 'react'
import classes from './contactsMap.module.css'
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


function Mapbox() {

    const selectedCity = useSelector(state => state.ContactsReducer.selectedCity)

    mapboxgl.accessToken = 'pk.eyJ1Ijoib25lbHlndXkiLCJhIjoiY2x0Ymo4bjgzMDM0ZzJqbnRtamtld2IyZSJ9.EEfQjHkmKYRC-7ghWV5iRg'

    const mapContainer = useRef(null)
    const map = useRef(null)
    const zoom = 10

    useEffect(() => {
        const { coordinates } = selectedCity

        if (!map.current) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/dark-v11',
                center: coordinates,
                zoom: zoom
            })
        } else {
            map.current.setCenter(coordinates)
        }

        if (map.current.marker) {
            map.current.marker.remove()
        }

        map.current.marker = new mapboxgl.Marker({
            color: '#ffe743'
        })
            .setLngLat(coordinates)
            .addTo(map.current)
    }, [selectedCity])

    return (
        <div className={classes.mapWrapper}>
            <div style={{position: 'relative', width: '100%', height: '100%'}} ref={mapContainer}/>
        </div>
    )
}

export default Mapbox