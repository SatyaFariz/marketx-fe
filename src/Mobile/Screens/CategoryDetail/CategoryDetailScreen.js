import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR } from '../../Constants'
import BackButton from '../../Components/BackButton'
import { FcStackOfPhotos } from 'react-icons/fc'
import { useState, useEffect, useRef } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { TextField, Switch, Accordion as MuiAccordion, AccordionSummary as MuiAccordionSummary, AccordionDetails } from '@material-ui/core'
import Button from '../../Components/Button'
import Validator from '../../../helpers/validator'
import UpdateCategory from '../../../mutations/UpdateCategory'
import NumberFormat from 'react-number-format'
import { useDropzone } from 'react-dropzone'
import { fromImage } from 'imtool'

const megabytes = 1048576

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary)

const Accordion = withStyles({
  root: {
    // border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion)

const Component = props => {
  const isMounted = useRef(true)
  const { environment } = props.relay
  const { category } = props
  const [file, setFile] = useState(null)
  const [name, setName] = useState(category.name)
  const [showsProductConditionField, setShowsProductConditionField] = useState(category.showsProductConditionField || false)
  const [requiresProductCondition, setRequiresProductCondition] = useState(category.requiresProductCondition || false)
  const [isPublished, setIsPublished] = useState(category.isPublished || false)
  const [loading, setLoading] = useState(false)
  const [validation, setValidation] = useState({ isValid: false })
  const [specFields, setSpecFields] = useState(category.specFields.map((field, i) => ({
    ...field,
    type: field.type || 'string',
    isRequired: field.isRequired || false,
    isAutocomplete: field.isAutocomplete || false,
    isEnum: field.isEnum || false,
    options: (field.options || []).join(', ') || '',
    min: field.min?.toString() || '',
    max: field.max?.toString() || '',
    key: i,
    expanded: false,
    deleted: false
  })))

  const { getRootProps, getInputProps } = useDropzone({
    // Disable click and keydown behavior
    accept: 'image/jpeg',
    disabled: loading,
    maxSize: 6 * megabytes,
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      if(acceptedFiles.length > 0) {
        const file = acceptedFiles[0]
        const tool = await fromImage(file)
        const image = await tool.quality(0.4).toFile(file.name)
        image.preview = URL.createObjectURL(image)
        setFile(image)
      }
    },
    onDropRejected: () => console.log('Rejected')
  })

  const setFields = (i, key, value) => {
    setSpecFields(prev => {
      const copy = [...prev]
      copy[i][key] = value
      return copy
    })
  }

  const isValid = () => {
    const validator = new Validator([
      {
        field: 'name',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      }
    ])

    const validation = validator.validate({
      name
    })

    setValidation(validation)
    return validation.isValid
  }

  const save = () => {
    if(isValid() && !loading) {
      const input = {
        id: category.id,
        name,
        showsProductConditionField,
        requiresProductCondition,
        isPublished,
        specFields: specFields.map(field => {
          return {
            attributeId: field.attribute.id,
            type: field.type,
            options: field.options.trim().length === 0 ? [] : field.options.split(',').map(item => item.trim()),
            isRequired: field.isRequired,
            isAutocomplete: field.isAutocomplete,
            isEnum: field.isEnum,
            max: field.max.trim().length > 0 ? parseFloat(field.max, 10) : null,
            min: field.min.trim().length > 0 ? parseFloat(field.min, 10) : null
          }
        })
      }

      UpdateCategory(environment, { input }, file, (payload, error) => {
        if(error) console.log(error)
        else if(payload) {
          const { message } = payload.actionInfo
          alert(message)
        }

        if(isMounted.current) {
          setFile(null)
          setLoading(false)
        }
      })

      setLoading(true)
    }
  }

  useEffect(() => {
    return () => isMounted.current = false
  }, [])

  return (
    <div style={{
      height: '100%',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        height: HEADER_HEIGHT,
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 9999,
        borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`
      }}>
        <BackButton/>
        <Button
          label="Save"
          onClick={save}
          loading={loading}
          style={{
            marginRight: 15,
            zIndex: 9
          }}
        />
        
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
          }}>Edit Category</h1>
        </div>
      </div>
      <div style={{
        flexGrow: 1,
        overflow: 'auto'
      }}>
        <div style={{
          padding: 20
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            {category.ancestors.map((item, i) => {
              return (
                <div key={i} style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                  <span style={{ marginRight: 5 }}>{`${item.name} /`}</span>
                </div>
              )
            })}
            <span style={{ fontWeight: 'bold' }}>{category.name}</span>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 20,
            paddingBottom: 20
          }}>
            {category.icon ?
            <div {...getRootProps({className: 'dropzone'})}>
              <img
                alt={category.name}
                src={file ? file.preview : category.icon?.url}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
              <input {...getInputProps()} />
            </div>
            :
            <>
              {file ?
              <div {...getRootProps({className: 'dropzone'})}>
                <img
                  alt={category.name}
                  src={file.preview}
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
                <input {...getInputProps()} />
              </div>
              :
              <div
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: '50%',
                  backgroundColor: '#f1f1f1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                {...getRootProps({className: 'dropzone'})}
              >
                <FcStackOfPhotos size={30}/>
                <input {...getInputProps()} />
              </div>
              }
            </>
            }
          </div>
          
          <TextField
            variant="outlined"
            label="Nama"
            fullWidth
            disabled={loading}
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            onChange={e => setName(e.target.value.trimLeft())}
            value={name}
            error={validation?.name?.isInvalid}
            helperText={validation?.name?.message}
          />
          
          {!['rental_product', 'service'].includes(category.listingType) &&
          <>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 10
            }}>
              <span>Shows Product Condition Field</span>

              <Switch
                checked={showsProductConditionField}
                onChange={() => setShowsProductConditionField(prev => !prev)}
                disabled={loading}
              />
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 10
            }}>
              <span>Requires Product Condition</span>

              <Switch
                checked={!showsProductConditionField ? false : requiresProductCondition}
                onChange={() => setRequiresProductCondition(prev => !prev)}
                disabled={loading || !showsProductConditionField}
              />
            </div>
          </>
          }

          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 10
          }}>
            <span>Published</span>

            <Switch
              checked={isPublished}
              onChange={() => setIsPublished(prev => !prev)}
              disabled={loading}
            />
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <h3>Specification Fields</h3>
            <span>
              Add
            </span>
          </div>

          {category.specFields.length === 0 ?
          <div>
            <span>There is no specification fields.</span>
          </div>
          :
          <div>
            {specFields.map((field, i) => {
              return (
                <div key={field.key} style={{ marginBottom: 10 }}>
                  <Accordion 
                    expanded={field.deleted ? false : field.expanded}
                    onChange={field.deleted ? () => {} : () => setFields(i, 'expanded', !field.expanded)}
                  >
                    <AccordionSummary>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexGrow: 1
                      }}>
                        <span>{field.attribute.name} {field.deleted ? '(Deleted)' : ''}</span>
                        <Button
                          label={field.deleted ? 'Undo' : 'Delete'}
                          onClick={(e) => {
                            e.stopPropagation()
                            setFields(i, 'deleted', !field.deleted)
                          }}
                          disabled={loading}
                        />
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div style={{
                        flexGrow: 1
                      }}>
                        
                        {field.type === 'int' &&
                        <>
                          <NumberFormat
                            customInput={TextField}
                            variant="outlined"
                            label="Max"
                            value={field.max}
                            onValueChange={({ value }) => setFields(i, 'max', value.trimLeft())}
                            fullWidth
                            disabled={loading}
                            style={{
                              marginTop: 10,
                              marginBottom: 10
                            }}
                            inputProps={{
                              pattern: "[0-9]*",
                              type: "text",
                              inputMode: "numeric"
                            }}
                            // error={validation?.price?.isInvalid}
                            // helperText={validation?.price?.message}
                            allowNegative={false}
                            decimalSeparator={null}
                            thousandSeparator="."
                          />

                          <NumberFormat
                            customInput={TextField}
                            variant="outlined"
                            label="Min"
                            value={field.min}
                            onValueChange={({ value }) => setFields(i, 'min', value.trimLeft())}
                            fullWidth
                            disabled={loading}
                            style={{
                              marginTop: 10,
                              marginBottom: 10
                            }}
                            inputProps={{
                              pattern: "[0-9]*",
                              type: "text",
                              inputMode: "numeric"
                            }}
                            // error={validation?.price?.isInvalid}
                            // helperText={validation?.price?.message}
                            allowNegative={false}
                            decimalSeparator={null}
                            thousandSeparator="."
                          />
                        </>
                        }

                        {field.type === 'string' &&
                        <TextField
                          variant="outlined"
                          label="Options"
                          fullWidth
                          disabled={loading}
                          style={{
                            marginTop: 10,
                            marginBottom: 10
                          }}
                          multiline
                          onChange={e => setFields(i, 'options', e.target.value.trimLeft())}
                          value={field.options}
                        />
                        }

                        <div style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginTop: 10,
                          marginBottom: 10
                        }}>
                          <span>Required</span>

                          <Switch
                            checked={field.isRequired}
                            onChange={() => setFields(i, 'isRequired', !field.isRequired)}
                            disabled={loading}
                          />
                        </div>

                        {field.type === 'string' &&
                        <>
                          <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: 10,
                            marginBottom: 10
                          }}>
                            <span>Autocomplete</span>

                            <Switch
                              checked={field.isAutocomplete}
                              onChange={() => setFields(i, 'isAutocomplete', !field.isAutocomplete)}
                              disabled={loading}
                            />
                          </div>

                          <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: 10,
                            marginBottom: 10
                          }}>
                            <span>Enum</span>

                            <Switch
                              checked={field.isEnum}
                              onChange={() => setFields(i, 'isEnum', !field.isEnum)}
                              disabled={loading}
                            />
                          </div>
                        </>
                        }
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              )
            })}
          </div>
          }
          
        </div>
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  category: graphql`
    fragment CategoryDetailScreen_category on Category {
      id,
      name,
      isPublished,
      showsProductConditionField,
      requiresProductCondition,
      listingType,
      ancestors {
        id,
        name
      },
      icon {
        url
      },
      specFields {
        type,
        isRequired,
        isEnum,
        isAutocomplete,
        options,
        max,
        min,
        attribute {
          id,
          name
        }
      }
    }
  `
})