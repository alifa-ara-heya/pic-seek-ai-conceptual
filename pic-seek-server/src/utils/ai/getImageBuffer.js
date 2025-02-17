require('dotenv').config();

const getImageBuffer = async (prompt, category) => {
    const finalPrompt = `imagine a ${category} : ${prompt}`;
    console.log(finalPrompt);
    const myForm = new FormData();
    myForm.append('prompt', finalPrompt)

    const response = await fetch('https://clipdrop-api.co/text-to-image/v1', {
        method: 'POST',
        headers: {
            'x-api-key': process.env.CD_KEY,
        },
        body: myForm,
    })

    const buffer = await response.arrayBuffer()

    // buffer here is a binary representation of the returned image
    console.log(buffer);
    return buffer

}

module.exports = getImageBuffer;