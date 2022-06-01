import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useRouter } from "next/router"

// Service
import { useAppContext } from "@/components/context/App"

// Components
import { LocationMap, LocationItem } from "@/components/composite"
import { ArrowBracket as IconToBack } from "@/components/svg"
import { Control } from "@/components/ui"

const Locations = ({ data: locations, name, exclusionList, ...props }) => {
  const [ locationId, setLocationId ] = useState(0)
  const [ locationsList, setLocationsList ] = useState([])
  const appContext = useAppContext()
  const parentLocationID = locations.find((item) => item.id === locationId).parentId || 0
  const router = useRouter()
  const contentData = require(`@/common/data/${name}List.json`);
  
  const getFilteredList = () => {
    if (!exclusionList) {
      return locations.filter((item) => item.parentId === locationId)
    }
    
    return locations.filter((item) => item.parentId === locationId && !exclusionList.some((id) => id === item.id))
  }
  
  useEffect(() => {
    const filteredList = getFilteredList()
    
    setLocationsList(filteredList)
  }, [ locationId ])
  
  return (
    <LocationMap id={locationId} name={name} {...props}>
      {locationsList.map((location) => (
        <LocationItem
          key={`LocationItem-${location.id}`}
          location={location}
          name={name}
          onClick={
            typeof location.contentId !== 'undefined'
              ? () => router.push(`/${name}/${location.contentId}`)
              : () => setLocationId(location.id)
          }
          content={contentData.find((contentItem) => contentItem.id === location.contentId)}
        />
      ))}
    
      {appContext.pageControlRef && locationId ? ReactDOM.createPortal(
        <Control
          onClick={() => setLocationId(parentLocationID)}
        >
          <IconToBack/>
        </Control>,
        appContext.pageControlRef.current
      ) : null}
    </LocationMap>
  );
}

export default Locations;
