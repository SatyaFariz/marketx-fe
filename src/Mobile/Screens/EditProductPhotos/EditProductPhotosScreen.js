import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, MAX_IMAGE_UPLOAD } from '../../Constants'
import useAppContext from '../../hooks/useAppContext'
import useDisablePullToRefresh from '../../hooks/useDisablePullToRefresh'
import { useRef, useEffect, useState } from 'react'
import { IconButton, CircularProgress } from '@material-ui/core'
import ImageItem from './ImageItem'
import DeleteProductImages from '../../../mutations/DeleteProductImages'
import AddProductImages from '../../../mutations/AddProductImages'
import UpdateMainProductImage from '../../../mutations/UpdateMainProductImage'
import { useDropzone } from 'react-dropzone'
import { fromImage } from 'imtool'
import BackButton from '../../Components/BackButton'
import { IoCloseOutline } from 'react-icons/io5'
import CameraIcon from '../../Components/CameraIcon'
import Button from '../../Components/Button'

const megabytes = 1048576

const Component = props => {
  useDisablePullToRefresh()
  const _isMounted = useRef(true)
  const { environment, history } = useAppContext()
  const { product, me } = props
  const category = product.category[product.category.length - 1]
  const maxImageUpload = category.maxImageUpload || MAX_IMAGE_UPLOAD
  const merchantId = product?.merchant?.id
  const [uploading, setUploading] = useState(false)
  const [updating, setUpdating] = useState(false)

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
    disabled: uploading || (maxImageUpload === product.images.length),
    maxSize: 6 * megabytes,
    onDrop: async (acceptedFiles) => {
      const maxFiles = maxImageUpload - product.images.length
      if(acceptedFiles.length > 0) {
        const images = await Promise.all(acceptedFiles.slice(0, maxFiles).map(file => {
          return new Promise(async (resolve) => {
            const tool = await fromImage(file)
            const image = await tool.quality(0.4).toFile(file.name)
            image.preview = URL.createObjectURL(image)
            resolve(image)
          })
        }))
        
        if(images.length > 0)
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

  const updateMainImage = (id) => {
    if(!updating) {
      setUpdating(true)
      UpdateMainProductImage(environment, { id: product.id, imageId: id }, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          const { hasError, message } = payload.actionInfo
          alert(message)
          if(!hasError) {
            // do sth
          }
        }

        _isMounted.current && setUpdating(false)
      })
    }
  }

  useEffect(() => {
    if(merchantId !== me?.id) {
      history.replace('/')
    }
  }, [me, merchantId, history])

  if(merchantId !== me?.id) return null

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
        <div style={{ zIndex: 1, marginLeft: 5 }}>
          <IconButton onClick={() => setSelectedIds([])}>
            <IoCloseOutline  style={{ color: 'black' }} size={30}/>
          </IconButton>
        </div>
        :
        <BackButton/>
        }

        {selectedIds.length > 0 &&
        <div style={{ zIndex: 1, marginRight: 15 }}>
          <Button
            label="Hapus"
            onClick={bulkDelete}
            loading={deleting}
          />
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
          }}>Foto</h1>
        </div>
      </div>

      <div style={{
        top: HEADER_HEIGHT,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'auto'
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
            <span>
              <CameraIcon/>
            </span>
            }
            <input {...getInputProps()} />
          </div>
          {product.images.map((item, i) => {
            return (
              <ImageItem
                image={item} 
                key={item.id}
                isMain={i === 0}
                selectedIds={selectedIds}
                setSelectedIds={setSelectedIds}
                updateMainImage={() => updateMainImage(item.id)}
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
        url
      },
      merchant {
        id
      },
      category {
        id,
        maxImageUpload
      }
    }
  `,
  me: graphql`
    fragment EditProductPhotosScreen_me on User {
      id
    }
  `
})