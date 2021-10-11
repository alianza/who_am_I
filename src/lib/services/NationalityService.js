import ApiService from "./ApiService";

const NationalityService = {
    baseUrl: "https://api.nationalize.io",

    getNationalityByName(name) {
        return ApiService.doLoad(`${this.baseUrl}?name=${name}`).then(jsonData => {
            return jsonData
        }).catch(e => {
            console.log('Error', e)
            alert('Error retrieving artists... \nPlease try again later!',)
        })
    },
}

export default NationalityService;
