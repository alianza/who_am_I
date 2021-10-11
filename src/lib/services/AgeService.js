import ApiService from "./ApiService";

const AgeService = {
    baseUrl: "https://api.agify.io",

    getAgeByName(name) {
        return ApiService.doLoad(`${this.baseUrl}?name=${name}`).then(jsonData => {
            return jsonData
        }).catch(e => {
            console.log('Error', e)
            alert('Error retrieving age by name... \nPlease try again later!',)
        })
    },

    getAgeByNameAndCountry(name, countryCode) {
        return ApiService.doLoad(`${this.baseUrl}?name=${name}&country_id=${countryCode}`).then(jsonData => {
            return jsonData
        }).catch(e => {
            console.log('Error', e)
            alert('Error retrieving age by name and country... \nPlease try again later!',)
        })
    },
}

export default AgeService;
