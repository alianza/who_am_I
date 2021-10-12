import React, { useEffect, useState } from "react";
import ApiService from "lib/services/ApiService";
import { capitalize } from "lib/Capitalize";
import { useHistory, useRouteMatch } from "react-router-dom";
import iso3311a2 from 'iso-3166-1-alpha-2'
import { ReactComponent as Female } from 'assets/gender-female.svg'
import { ReactComponent as Male } from 'assets/gender-male.svg'

function Result() {
    const history = useHistory();
    const match = useRouteMatch();

    const name = match.params.name
    const countryCode = match.params.countryCode?.toUpperCase()
    const [result, setResult] = useState()

    useEffect(() => {
        // Loader.showLoader()
        if (name && !countryCode) {
            ApiService.lookUpByName(name).then(result => {
                setResult(result)
                console.log(result)
                // Loader.hideLoader()
            })
        } else if (name && countryCode) {
            ApiService.lookUpByNameAndCountry(name, countryCode).then(result => {
                setResult(result)
                console.log(result)
                // Loader.hideLoader()
            })
        } else { history.replace('/') }
    }, [name, countryCode, history])

    return (
        <div id={'result'} className={'absolute w-screen top-16 p-4 flex flex-col gap-8'}>
            <div className={'text-center'}>
                <h1 className={'text-8xl text-accent-1 text-shadow-main'}>Who Am I?</h1>
            </div>
            { result &&
            <div className={"flex flex-col gap-4 sm:m-auto shadow"}>
                <div className={'text-center bg-accent-1 p-4 shadow-lg md:px-24 shadow-outline-text-secondary'}>
                    <h1 className={'text-4xl my-4'}>{capitalize(name)}</h1>

                    {countryCode &&
                        <h2 className={'text-accent-3 mb-4'}>From <span className={'text-text-primary'}>{iso3311a2.getCountry(countryCode)}</span></h2>
                    }
                    { !!result.ageResult?.age && <>
                        <h2 className={'text-accent-3'}>Age</h2>
                        <h1 className={'text-4xl mb-4'}>{result.ageResult.age}</h1></>
                    }

                    { !!result.genderResult?.gender && <>
                        <h2 className={'text-accent-3'}>Gender</h2>
                        {result.genderResult.gender === 'male' ?
                            <Male className={'fill-current w-[64px] h-[64px] m-auto'}/> :
                            <Female className={'fill-current w-[64px] h-[64px] m-auto'}/>
                        }
                        <div className={'text-sm text-accent-3 mb-4'}>Probability: <span className={'text-text-primary'}>{Math.round(100 * result.genderResult.probability)}%</span></div></>
                    }

                    { !!result.nationalityResult?.country?.length && <>
                        <h2 className={'text-accent-3'}>Nationality</h2>
                        <h1 className={'text-4xl'}>{iso3311a2.getCountry(result.nationalityResult.country[0].country_id)}</h1>
                        <div className={'text-sm text-accent-3'}>Probability: <span className={'text-text-primary'}>{Math.round(100 * result.nationalityResult.country[0].probability)}%</span></div></>
                    }

                    { !(!!result?.ageResult?.age || !!result?.genderResult?.gender || !!result?.nationalityResult?.country?.length) && <>
                        <span className={'text-primary block'}>You are a unknown alien... 👾</span>
                        <span className={'text-secondary text-sm'}>No known data based on your name.</span></>
                    }
                </div>
                <button onClick={() => { history.push('/') }} className={"bg-secondary p-2 text-primary font-bold transition-transform ease-in-out hover:scale-105 active:scale-95"}>Try Again!</button>
            </div>
            }
        </div>
    );
}

export default Result;
