import AgeService from './AgeService'
import GenderService from './GenderService.js'
import NationalityService from './NationalityService.js'

const ApiService = {
    doLoad(url) { // Base method for doing http Get requests and returning the result
        // console.log(url)
        return fetch(url).then(response => {
            if (response.status === 404) { return '' }
            if (response.status === 200) { return response.json() }})
            .then(data => {
                // console.log(data)
                return data
            })
    },

    async lookUpByName(name) {
        const [ageResult, genderResult, nationalityResult] = await Promise.all([
            AgeService.getAgeByName(name),
            GenderService.getGenderByName(name),
            NationalityService.getNationalityByName(name)
        ]);

        return {ageResult, genderResult, nationalityResult}
    },

    async lookUpByNameAndCountry(name, countryCode) {
        const [ageResult, genderResult] = await Promise.all([
            AgeService.getAgeByNameAndCountry(name, countryCode),
            GenderService.getGenderByNameAndCountry(name, countryCode)
        ]);

        return {ageResult, genderResult}
    }
}

export default ApiService;
