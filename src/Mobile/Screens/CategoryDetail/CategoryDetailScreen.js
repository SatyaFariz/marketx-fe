import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR } from '../../Constants'
import Color from '../../Constants/Color'
import BackButton from '../../Components/BackButton'
import { FcStackOfPhotos } from 'react-icons/fc'
import { useState, useEffect, useRef } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { TextField, ButtonBase, Switch, Accordion as MuiAccordion, AccordionSummary as MuiAccordionSummary, AccordionDetails } from '@material-ui/core'
import Button from '../../Components/Button'
import Validator from '../../../helpers/validator'
import UpdateCategory from '../../../mutations/UpdateCategory'
import NumberFormat from 'react-number-format'
import { useDropzone } from 'react-dropzone'
import { fromImage } from 'imtool'
import Link from '../../Components/Link'
import useAppContext from '../../hooks/useAppContext'
import CreateSpecificationFieldsModal from './CreateSpecificationFieldsModal'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

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
  const { category, attributes } = props
  const { queryParams } = useAppContext()
  const [file, setFile] = useState(null)
  const [name, setName] = useState(category.name)
  const [showsProductConditionField, setShowsProductConditionField] = useState(category.showsProductConditionField || false)
  const [requiresProductCondition, setRequiresProductCondition] = useState(category.requiresProductCondition || false)
  const [forceLocationInput, setForceLocationInput] = useState(category.forceLocationInput || false)
  const [isPublished, setIsPublished] = useState(category.isPublished || false)
  const [loading, setLoading] = useState(false)
  const [validation, setValidation] = useState({ isValid: false })
  const [specFields, setSpecFields] = useState(category.specFields.map((field, i) => ({
    ...field,
    type: field.type || 'string',
    isRequired: field.isRequired || false,
    isAutocomplete: field.isAutocomplete || false,
    isMulti: field.isMulti || false,
    isEnum: field.isEnum || false,
    options: (field.options || []).join(', ') || '',
    min: field.min?.toString() || '',
    max: field.max?.toString() || '',
    numberOfLines: field.numberOfLines?.toString() || '',
    prefix: field.prefix,
    suffix: field.suffix,
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
        forceLocationInput,
        isPublished,
        specFields: specFields.reduce((fields, field) => {
          if(!field.deleted) {
            fields.push({
              attributeId: field.attribute.id,
              type: field.type,
              options: field.type === 'string' ? field.options.split(',').reduce((arr, currentVal) => {
                const trimmed = currentVal.trim()
                if(trimmed.length > 0) arr.push(trimmed)
                return arr
              }, []) : [],
              isRequired: field.isRequired,
              isAutocomplete: field.isAutocomplete,
              isEnum: field.isEnum,
              isMulti: field.isMulti,
              prefix: field.prefix,
              suffix: field.suffix,
              max: field.max.trim().length > 0 ? parseFloat(field.max, 10) : null,
              min: field.min.trim().length > 0 ? parseFloat(field.min, 10) : null,
              numberOfLines: field.numberOfLines.trim().length > 0 ? parseInt(field.numberOfLines, 10) : null
            })
          }
          return fields
        }, [])
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

  const handleOnDragEnd = (result) => {
    if (!result.destination) return

    setSpecFields(prev => {
      const items = Array.from(prev)
      const [reorderedItem] = items.splice(result.source.index, 1)
      items.splice(result.destination.index, 0, reorderedItem)

      return items
    })
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

            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 10
            }}>
              <span>Force Location Input</span>

              <Switch
                checked={forceLocationInput}
                onChange={() => setForceLocationInput(prev => !prev)}
                disabled={loading}
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
            <ButtonBase
              component={Link}
              href={`/category/${category.id}/detail?action=createFields`}
              style={{ color: Color.primary }}
            >
              <span>
                Add
              </span>
            </ButtonBase>
          </div>

          {category.specFields.length === 0 ?
          <div>
            <span>There is no specification fields.</span>
          </div>
          :
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="fields">
              {(provided) => (
                <div className="fields" {...provided.droppableProps} ref={provided.innerRef}>
                  {specFields.map((field, i) => {
                    return (
                      <div
                        key={field.key}
                      >
                        <Draggable
                          draggableId={field.key.toString()}
                          index={i}
                        >
                          {provided => (
                            <div
                              ref={provided.innerRef} 
                              {...provided.draggableProps} 
                              {...provided.dragHandleProps}
                              
                            >
                              <Accordion
                                style={{ paddingBottom: 10, backgroundColor: 'transparent' }}
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
                                    <span>{field.attribute.name} {field.isMulti ? '(Multi)' : ''} {field.deleted ? '(Deleted)' : ''}</span>
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
                                    <div>
                                      {field.prefix?.trim()?.length > 0 &&
                                      <span style={{ fontSize: 12 }}>Prefix: {field.prefix}</span>
                                      }
                                      {field.prefix?.trim()?.length > 0 && field.suffix?.trim()?.length > 0 &&
                                      <span style={{ fontSize: 12 }}>{', '}</span>
                                      }
                                      {field.suffix?.trim()?.length > 0 &&
                                      <span style={{ fontSize: 12 }}>Suffix: {field.suffix}</span>
                                      }
                                    </div>
                                    
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

                                    {field.type === 'string' &&
                                    <NumberFormat
                                      customInput={TextField}
                                      variant="outlined"
                                      label="Number of Lines"
                                      value={field.numberOfLines}
                                      onValueChange={({ value }) => setFields(i, 'numberOfLines', value.trimLeft())}
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
                                      allowNegative={false}
                                      decimalSeparator={null}
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
                          )}
                        </Draggable>
                      </div>
                    )
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          }
          
        </div>
      </div>

      <div style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'white',
        zIndex: 9999,
        opacity: queryParams?.action === 'createFields' ? 1 : 0,
        pointerEvents: queryParams?.action === 'createFields' ? undefined : 'none'
      }}>
        <CreateSpecificationFieldsModal attributes={attributes} category={category}/>
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
      forceLocationInput,
      listingType,
      ...CreateSpecificationFieldsModal_category,
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
        isMulti,
        suffix,
        prefix,
        isAutocomplete,
        options,
        max,
        min,
        numberOfLines,
        attribute {
          id,
          name
        }
      }
    }
  `,
  attributes: graphql`
    fragment CategoryDetailScreen_attributes on Attribute @relay(plural: true) {
      id,
      ...CreateSpecificationFieldsModal_attributes
    }
  `
})