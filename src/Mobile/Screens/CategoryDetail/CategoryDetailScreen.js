import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR } from '../../Constants'
import BackButton from '../../Components/BackButton'
import { FcStackOfPhotos } from 'react-icons/fc'
import { useState, useEffect, useRef } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { TextField, Switch, Accordion as MuiAccordion, AccordionSummary as MuiAccordionSummary, AccordionDetails } from '@material-ui/core'
import Button from '../../Components/Button'

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
  const { category } = props
  const [name, setName] = useState(category.name)
  const [showsProductConditionField, setShowsProductConditionField] = useState(category.showsProductConditionField || false)
  const [requiresProductCondition, setRequiresProductCondition] = useState(category.requiresProductCondition || false)
  const [isPublished, setIsPublished] = useState(category.isPublished || false)
  const [loading, setLoading] = useState(false)
  const [validation, setValidation] = useState({ isValid: false })
  const [specFields, setSpecFields] = useState(category.specFields.map((field, i) => ({
    ...field,
    options: (field.options || []).join(', ') || '',
    key: i,
    expanded: false,
    deleted: false
  })))

  const setFields = (i, key, value) => {
    setSpecFields(prev => {
      const copy = [...prev]
      copy[i][key] = value
      return copy
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
        position: 'sticky',
        top: 0,
        zIndex: 9999,
        borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`
      }}>
        <BackButton/>
        
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
            <img
              alt={category.name}
              src={category.icon?.url}
              style={{
                height: 60,
                width: 60,
                borderRadius: '50%'
              }}
            />
            :
            <div style={{
              height: 60,
              width: 60,
              borderRadius: '50%',
              backgroundColor: '#f1f1f1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <FcStackOfPhotos size={30}/>
            </div>
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
                      <div>
                        <TextField
                          variant="outlined"
                          label="Type"
                          fullWidth
                          disabled={loading}
                          style={{
                            marginTop: 10,
                            marginBottom: 10
                          }}
                          onChange={e => setFields(i, 'type', e.target.value.trimLeft())}
                          value={field.type}
                          error={validation?.name?.isInvalid}
                          helperText={validation?.name?.message}
                        />

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
                          error={validation?.name?.isInvalid}
                          helperText={validation?.name?.message}
                        />
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
          name
        }
      }
    }
  `
})