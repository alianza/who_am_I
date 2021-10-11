import './Artists.scss'
import React, { useEffect, useState } from "react";
import Loader from "../../../lib/Loader";
import ExampleMusicService from "../../../lib/services/ExampleMusicService";
import ScrollToTopButton from "../../ScrollToTopButton/ScrollToTopButton";

function Artists() {
    const [artists, setArtists] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => { // Initial data fetch
        Loader.showLoader()
        ExampleMusicService.getArtists().then(artists => {
            setArtists(artists)
            Loader.hideLoader()
        })

        return () => { setArtists([]) };
    }, [])

    return (
        <div id={'artists'} className={'flex flex-wrap justify-between gap-2'}>
            <div className={'flex justify-between flex-wrap gap-4 mb-4 w-full'}>
                <h1>All Artists</h1>
                <div style={{flexGrow: "99999999"}}/> {/* To fill up remaining flex space, to make search input full width when wrapping */}
                <input className={'p-2 text-text-primary bg-accent-2 flex-grow max-w-100'} placeholder={'Search artists! 👨‍🎤'} onChange={event => setQuery(event.target.value?.toLowerCase())}/>
            </div>

            {artists?.filter(artist => artist.name.toLowerCase().includes(query))?.length ?
                artists?.filter(artist => artist.name.toLowerCase().includes(query)).map(artist =>
                    <div key={artist.id}>{artist.name}</div>) :
                <h3>No results...</h3>}
            {artists?.length > 50 && <ScrollToTopButton/>}
        </div>
    );
}

export default Artists;
