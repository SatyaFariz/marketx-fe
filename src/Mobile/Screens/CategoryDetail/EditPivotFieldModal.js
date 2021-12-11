import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR } from '../../Constants'
import Color from '../../Constants/Color'
import BackButton from '../../Components/BackButton'
import { useState, useEffect, useRef } from 'react'
import { TextField, Switch } from '@material-ui/core'
import Button from '../../Components/Button'
import { Add } from '@material-ui/icons'
import { Fab, ButtonBase } from '@material-ui/core'
import Validator from '../../../helpers/validator'
import useAppContext from '../../hooks/useAppContext'
import SetPivotField from '../../../mutations/SetPivotField'
import { Autocomplete } from '@material-ui/lab'

const Component = props => {
  const isMounted = useRef(true)
  const { history } = useAppContext()
  const { category, attributes, relay: { environment }} = props
  const { pivotField } = category
  const [loading, setLoading] = useState(false)
  const [attribute, setAttribute] = useState(pivotField?.attribute)
  const [emptyErrorMessage, setEmptyErrorMessage] = useState(pivotField?.emptyErrorMessage || '')
  const [helperText, setHelperText] = useState(pivotField?.pivotField || '')
  const [showsInProductDetail, setShowsInProductDetail] = useState(pivotField?.showsInProductDetail || false)
  const [options, setOptions] = useState(!pivotField ? [
    {
      key: 1,
      id: '',
      label: '',
      desc: '',
      isDefault: false
    },
    {
      key: 1,
      id: '',
      label: '',
      desc: '',
      isDefault: false
    }
  ] : pivotField.options.map((field, i) => ({
    key: i,
    id: field.id || '',
    label: field.label || '',
    desc: field.desc || '',
    isDefault: field.isDefault || false
  })))
  const [fieldId, setFieldId] = useState(options.length)
  const [validation, setValidation] = useState({ isValid: false })

  const setFields = (i, key, value) => {
    setOptions(prev => {
      const copy = key === 'isDefault' && value === true ? prev.map(item => ({ ...item, isDefault: false })) : [...prev]
      copy[i][key] = value
      return copy
    })
  }

  const isValid = () => {
    const rules = [
      {
        field: 'attribute',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.' 
      }
    ]
    const fields = { attribute }
    options.forEach(item => {
      const key = `option_label_${item.key}`
      rules.push({
        field: key,
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      })

      fields[key] = item.label
    })

    const validator = new Validator(rules)
    const validation = validator.validate(fields)
    setValidation(validation)
    if(options.length < 2) {
      alert('Minimum 2 options!')
      return false
    }
    return validation.isValid
  }

  const save = () => {
    if(!loading && isValid()) {
      const variables = {
        categoryId: category.id,
          pivotField: {
          attributeId: attribute.id,
          emptyErrorMessage,
          helperText,
          showsInProductDetail,
          options: options.map(option => ({
            id: option.id,
            label: option.label,
            desc: option.desc,
            isDefault: option.isDefault
          }))
        }
      }
      SetPivotField(environment, variables, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          const { message, hasError } = payload.actionInfo
          alert(message)
          if(!hasError)
            history.goBack()
        }

        isMounted.current && setLoading(false)
      })
      setLoading(true)
    }
  }

  const addItem = () => {
    const nextId = fieldId + 1
    setFieldId(nextId)
    setOptions(prev => [...prev, {
      key: nextId,
      id: null,
      label: '',
      desc: '',
      isDefault: false
    }])
  }

  const deleteItem = (i) => {
    const confirmed = window.confirm("You sure want to delete this?")
    if(confirmed) {
      setOptions(prev => {
        const copy = prev.slice()
        return copy.filter((item, j) => i !== j)
      })
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
          }}>Edit Pivot Field</h1>
        </div>
      </div>

      <div style={{
        position: 'relative',
        flexGrow: 1
      }}>
        <div style={{ 
          overflow: 'auto',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0
        }}>
          <div style={{
            padding: 0
          }}>
            <div style={{
              paddingTop: 20,
              paddingLeft: 20,
              paddingRight: 20
            }}>
              {pivotField ?
              <TextField
                variant="outlined"
                label="Attribute"
                fullWidth
                disabled={true}
                value={pivotField.attribute.name}
                style={{
                  marginTop: 10,
                  marginBottom: 10
                }}
              />
              :
              <Autocomplete
                options={attributes}
                getOptionLabel={(option) => option.name}
                value={attribute}
                onChange={(_, value) => setAttribute(value)}
                renderInput={(params) => 
                  <TextField 
                    {...params} 
                    label='Attribute'
                    fullWidth
                    disabled={loading} 
                    variant="outlined"
                    style={{
                      marginTop: 10,
                      marginBottom: 10
                    }}
                    error={validation[`attribute`]?.isInvalid}
                    helperText={validation[`attribute`]?.message}
                  />
                }
              />
              }

              <TextField
                variant="outlined"
                label="Empty Error Message"
                fullWidth
                disabled={loading}
                value={emptyErrorMessage}
                onChange={e => setEmptyErrorMessage(e.target.value.trimLeft())}
                style={{
                  marginTop: 10,
                  marginBottom: 10
                }}
              />

              <TextField
                variant="outlined"
                label="Helper Text"
                fullWidth
                disabled={loading}
                value={helperText}
                onChange={e => setHelperText(e.target.value.trimLeft())}
                style={{
                  marginTop: 10,
                  marginBottom: 10
                }}
              />

              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 10,
                marginBottom: 10
              }}>
                <span>Shows in product detail</span>

                <Switch
                  checked={showsInProductDetail}
                  onChange={() => setShowsInProductDetail(val => !val)}
                  disabled={loading}
                />
              </div>

              <h3>Options</h3>
            </div>
            {options.map((option, idx) => {
              return (
                <div key={option.key}>
                  {idx > 0 &&
                  <div style={{
                    marginBottom: 10,
                    marginTop: 10,
                    height: 10,
                    backgroundColor: '#f1f1f1'
                  }}/>
                  }

                  <div style={{
                    paddingLeft: 20,
                    paddingRight: 20
                  }}>
                    {idx > 1 &&
                    <div
                      style={{
                        display: 'flex',
                        alignContent: 'flex-end',
                        justifyContent: 'flex-end',
                        marginBottom: 10
                      }}
                    >
                      <ButtonBase
                        style={{ color: Color.primary }}
                        onClick={() => deleteItem(idx)}
                      >
                        <span>
                          Delete
                        </span>
                      </ButtonBase>
                    </div>
                    }

                    <TextField
                      variant="outlined"
                      label="Label"
                      fullWidth
                      disabled={loading}
                      value={option.label}
                      onChange={e => setFields(idx, 'label', e.target.value.trimLeft())}
                      style={{
                        marginTop: 10,
                        marginBottom: 10
                      }}
                      error={validation[`option_label_${option.key}`]?.isInvalid}
                      helperText={validation[`option_label_${option.key}`]?.message}
                    />

                    <TextField
                      variant="outlined"
                      label="Short Desc"
                      fullWidth
                      disabled={loading}
                      value={option.desc}
                      onChange={e => setFields(idx, 'desc', e.target.value.trimLeft())}
                      style={{
                        marginTop: 10,
                        marginBottom: 10
                      }}
                    />

                    <div style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: 10,
                      marginBottom: 10
                    }}>
                      <span>Default</span>

                      <Switch
                        checked={option.isDefault}
                        onChange={() => setFields(idx, 'isDefault', !option.isDefault)}
                        disabled={loading}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              paddingTop: 20,
              paddingBottom: 20
            }}>
              <Fab
                color="primary"
                style={{
                  boxShadow: 'none'
                }}
                onClick={addItem}
              >
                <Add />
              </Fab>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  category: graphql`
    fragment EditPivotFieldModal_category on Category {
      id,
      pivotField {
        id,
        emptyErrorMessage,
        helperText,
        showsInProductDetail,
        attribute {
          id,
          name
        },
        options {
          id,
          label,
          desc,
          isDefault
        }
      }
    }
  `,
  attributes: graphql`
    fragment EditPivotFieldModal_attributes on Attribute @relay(plural: true) {
      id,
      name
    }
  `
})