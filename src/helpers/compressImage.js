import Compressor from 'compressorjs'

const compressImage = async (file) => {
  const image = await new Promise(resolve => {
    new Compressor(file, {
      // quality: 0.8, default 0.92
      maxHeight: 1000,
      maxWidth: 1000,
  
      // The compression process is asynchronous,
      // which means you have to access the `result` in the `success` hook function.
      success(result) {
        resolve(result)
      },
      error(err) {
        console.log(err.message)
      },
    })
  })

  image.preview = URL.createObjectURL(image)
  return image
}

export default compressImage