import ApiService from "./ApiService";

const GenderService = {
    baseUrl: "https://api.genderize.io",

    getGenderByName(name) {
        return ApiService.doLoad(`${this.baseUrl}?name=${name}`).then(jsonData => {
            return jsonData
        }).catch(e => {
            console.log('Error', e)
            alert('Error retrieving gender by name... \nPlease try again later!',)
        })
    },

    getGenderByNameAndCountry(name, countryCode) {
        return ApiService.doLoad(`${this.baseUrl}?name=${name}&country_id=${countryCode}`).then(jsonData => {
            return jsonData
        }).catch(e => {
            console.log('Error', e)
            alert('Error retrieving gender by name and country... \nPlease try again later!',)
        })
    },
}

export default GenderService;
