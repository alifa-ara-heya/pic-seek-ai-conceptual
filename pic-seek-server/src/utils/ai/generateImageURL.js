require('dotenv').config();

const imgbbApi = `https://api.imgbb.com/1/upload?key=${process.env.VITE_IMGBB_API}`

const generateImageUrl = async (buffer, prompt) => {
    const formData = new FormData();
    formData.append('image', new Blob([buffer], { type: 'image/jpeg' }), `${prompt}.jpg`)

    const response = await fetch(imgbbApi, {
        method: 'POST',
        body: formData
    })

    const data = await response.json()
    return data

}

module.exports = generateImageUrl;