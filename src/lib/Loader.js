const Loader = {

    showLoader()  {
        document.getElementById('loader').classList.add('active')
    },

    hideLoader()  { // Hides the loader element after a small delay
        setTimeout(() => {
            document.getElementById('loader').classList.remove('active')
        }, 250)
    }
}

export default Loader;
