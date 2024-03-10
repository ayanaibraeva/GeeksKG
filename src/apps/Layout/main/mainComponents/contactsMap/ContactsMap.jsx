import React from 'react'
import classes from './contactsMap.module.css'
import { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import { selectCity } from '../../../../../store/ContactsSlice';
import mapboxgl from "mapbox-gl";


export const ContactsBox = () => {
    const { contacts, selectedCity } = useSelector(state => state.contactsReducer)
    const dispatch = useDispatch()

    const [activeItem, setActiveItem] = useState(0)

    const handleCity = (item, index) => {
        setActiveItem(index)
        dispatch(selectCity(item))
    }

    return (
        <div className={classes.contactsBox}>
            <h3 className={classes.mainTitle}>Контакты</h3>
            <div className={classes.citiesWrapper}>
                {contacts.map((item, index) => (
                    <button
                        key={index}
                        className={`${classes.cityButton} ${activeItem === index ? classes.active : ''}`} 
                        onClick={() => handleCity(item, index)}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
                {selectedCity && (
                    <div className={classes.infoWrapper}>
                        <span className={classes.title}>Номер телефона</span>
                        <ul>
                            {selectedCity.phoneNumbers.map((item, index) => (
                                <li 
                                    key={index}
                                    className={classes.phoneItem}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <span className={classes.title}>Email</span>
                        <ul>
                            {selectedCity.email.map((item, index) => (
                                <li
                                    key={index}
                                    className={classes.emailItem}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <span className={classes.title}>Адрес</span>
                        <ul>
                            {selectedCity.address.map((item, index) => (
                                <li 
                                    key={index}
                                    className={classes.addressItem}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
        </div>
    )
}

export const Mapbox = () => {

    const selectedCity = useSelector(state => state.contactsReducer.selectedCity)

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