import React, { useState } from "react";
import countries from "ISO3166-1.alpha2.json";
import { Link, useHistory } from "react-router-dom";

function Home() {
    const history = useHistory()

    const [name, setName] = useState('')
    const [countryCode, setCountryCode] = useState('')

    const doLookup = () => {
        if (name && !countryCode) {
            history.push(`/result/${name}`)
        } else if (name && countryCode) {
            history.push(`/result/${name}/${countryCode}`)
        } else {
            alert('Please fill in at least your name!')
        }
    }

    return (
        <div id={'home'} className={'w-screen mt-12 p-4 flex flex-col gap-8'}>
            <div className={'text-center'}>
                <h1 className={'text-8xl text-accent-1 text-shadow-main'}>Who Am I?</h1>
            </div>
            <div className={"flex flex-col gap-4 sm:m-auto"}>
                <input autoFocus onKeyDown={e => {if (e.key === "Enter") { doLookup() }}} onChange={event => setName(event.target.value)} className={"p-2 placeholder-text-primary"} placeholder={"Enter your name..."}/>
                <div className={'tooltip relative w-full'} data-tip={'To increase prediction accuracy!'}>
                    <select onChange={event => setCountryCode(event.target.value)} defaultValue={'DEFAULT'} className={"p-2 w-full"}>
                        <option value="DEFAULT" disabled hidden>Select your country... (Optional)</option>
                        { Object.keys(countries).map(countryCode => <option key={countryCode} value={countryCode}>{countries[countryCode]}</option>) }
                    </select>
                </div>
                <button onClick={doLookup} className={"bg-secondary p-2 text-primary font-bold transition-transform ease-in-out hover:scale-105 active:scale-95"}>Who Am I?</button>
                <Link to={'/about'} className={'text-center'}>What does this do?</Link>
            </div>
        </div>
    );
}

export default Home;
