import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, DIVIDER_COLOR } from '../../Constants'
import Color from '../../Constants/Color'
import { IoChevronBackSharp } from 'react-icons/io5'
import useAppContext from '../../hooks/useAppContext'
import { useRef, useEffect, useState } from 'react'
import { IconButton, CircularProgress } from '@material-ui/core'
import { Close, Delete } from '@material-ui/icons'
import '@brainhubeu/react-carousel/lib/style.css'
import ImageItem from './ImageItem'
import DeleteProductImages from '../../../mutations/DeleteProductImages'
import AddProductImages from '../../../mutations/AddProductImages'
import { useDropzone } from 'react-dropzone'
import { fromImage } from 'imtool'

const megabytes = 1048576

const Component = props => {
  const _isMounted = useRef(true)
  const { history, environment } = useAppContext()
  const { product } = props
  const [uploading, setUploading] = useState(false)

  const bulkUpload = (files) => {
    if(!uploading) {
      setUploading(true)
      AddProductImages(environment, { id: product.id }, files, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          const { hasError, message } = payload.actionInfo
          alert(message)
          if(!hasError) {
            // do sth
          }
        }

        _isMounted.current && setUploading(false)
      })
    }
  }

  const { getRootProps, getInputProps } = useDropzone({
    // Disable click and keydown behavior
    accept: 'image/jpeg',
    disabled: uploading,
    maxSize: 6 * megabytes,
    onDrop: async (acceptedFiles) => {
      if(acceptedFiles.length > 0) {
        const images = await Promise.all(acceptedFiles.map(file => {
          return new Promise(async (resolve) => {
            const tool = await fromImage(file)
            const image = await tool.quality(0.4).toFile(file.name)
            image.preview = URL.createObjectURL(image)
            resolve(image)
          })
        }))
        
        bulkUpload(images)
      }
    },
    onDropRejected: () => console.log('Rejected')
  })

  const [selectedIds, setSelectedIds] = useState([])
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    return () => _isMounted.current = false
  }, [])

  const bulkDelete = () => {
    if(!deleting) {
      setDeleting(true)
      DeleteProductImages(environment, { id: product.id, imageIds: selectedIds }, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          const { hasError, message } = payload.actionInfo
          alert(message)
          if(!hasError) {
            // do sth
          }
        }

        _isMounted.current && setDeleting(false)
      })
    }
  }

  return (
    <div>
      <div style={{
        height: HEADER_HEIGHT,
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 0,
        borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`
      }}>
        {selectedIds.length > 0 ?
        <div style={{ zIndex: 1 }}>
        <IconButton onClick={() => setSelectedIds([])}>
          <Close  style={{ color: 'black' }}/>
        </IconButton>
        </div>
        :
        <div 
        onClick={() => history.goBack()}
        style={{
          paddingRight: 10,
          paddingLeft: 10,
          zIndex: 1
        }}>
          <IoChevronBackSharp size={32}/>
        </div>
        }

        {selectedIds.length > 0 &&
        <div style={{ zIndex: 1 }}>
        <IconButton onClick={bulkDelete}>
          <Delete style={{ color: 'black' }}/>
        </IconButton>
        </div>
        }
        
        <div style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 0
        }}>
          <h1 style={{
            margin: 0,
            fontSize: 20,
            fontWeight: 500,
            textAlign: 'center',
          }}>Photos</h1>
        </div>
      </div>

      <div style={{
        top: HEADER_HEIGHT,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridGap: 10,
          padding: 15
        }}>
          <div style={{
            backgroundColor: 'rgb(207, 217, 222)',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          {...getRootProps({className: 'dropzone'})}
          >
            {uploading ?
            <CircularProgress size={24}/>
            :
            <span>Upload here</span>
            }
            <input {...getInputProps()} />
          </div>
          {product.images.map(item => {
            return (
              <ImageItem 
                image={item} 
                key={item.id}
                selectedIds={selectedIds}
                setSelectedIds={setSelectedIds}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  product: graphql`
    fragment EditProductPhotosScreen_product on Product {
      id,
      images {
        id,
        url,
        display
      }
    }
  `
})