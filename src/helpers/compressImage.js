import { fromImage } from 'imtool'

const megabytes = 1000000

const conversion = [
  [10, 0.06],
  [9, 0.07],
  [8, 0.082],
  [7, 0.08],
  [6, 0.1],
  [5, 0.2],
  [4.5, 0.35],
  [4, 0.4],
  [3, 0.5],
  [2, 0.6],
  [1, 0.65],
  [0.5, 0.65],
  [0, 0.65]
]

const compressImage = async (file) => {
  const { size } = file
  let toQuality = 0.4
  for(let i = 0; i < conversion.length; i++) {
    const [mulitiplier, quality] = conversion[i]
    if(size > (mulitiplier * megabytes)) {
      toQuality = quality
      break 
    }
  }

  const tool = await fromImage(file)
  const image = await tool.quality(toQuality).toFile(file.name)
  image.preview = URL.createObjectURL(image)
  return image
}

export default compressImage