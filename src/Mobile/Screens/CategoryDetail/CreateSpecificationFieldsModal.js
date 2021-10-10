import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR } from '../../Constants'
import Color from '../../Constants/Color'
import BackButton from '../../Components/BackButton'
import { useState, useEffect, useRef } from 'react'
import { TextField, MenuItem, Switch } from '@material-ui/core'
import Button from '../../Components/Button'
import NumberFormat from 'react-number-format'
import { Add } from '@material-ui/icons'
import { Autocomplete } from '@material-ui/lab'
import { Fab, ButtonBase } from '@material-ui/core'

const obj = {
  attribute: null,
  type: '',
  options: '',
  isRequired: false,
  isAutocomplete: false,
  isEnum: false,
  isMulti: false
}

const typeOptions = [
  {
    label: 'String',
    value: 'string'
  },
  {
    label: 'Integer',
    value: 'int'
  },
  {
    label: 'Year',
    value: 'year'
  }
]

const Component = props => {
  const { attributes } = props
  const isMounted = useRef(true)
  const [loading, setLoading] = useState(false)
  const [fields, setFields] = useState([obj])
  const [validation, setValidation] = useState({ isValid: false })

  const save = () => {

  }

  const setFieldValue = (i, key, value) => {
    setFields(prev => {
      return prev.map((field, j) => {
        if(i === j) {
          return {
            ...field,
            [key]: value
          }
        } else {
          return field
        }
      })
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
          }}>Create Fields</h1>
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
            paddingBottom: 20
          }}>
            {fields.map((item, i) => {
              return (
                <div key={i}>
                  {i > 0 &&
                  <div style={{
                    height: 15,
                    backgroundColor: '#f1f1f1'
                  }}/>
                  }
                  <div style={{
                    padding: 20,
                    paddingBottom: 15,
                    paddingTop: 15
                  }}>
                    {i > 0 &&
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
                        onClick={() => setFields(prev => {
                          const copy = prev.slice()
                          return copy.filter((item, j) => i !== j)
                        })}
                      >
                        <span>
                          Delete
                        </span>
                      </ButtonBase>
                    </div>
                    }
                    
                    <Autocomplete
                      options={attributes}
                      getOptionLabel={(option) => option.name}
                      value={item.attribute}
                      onChange={(_, value) => setFieldValue(i, 'attribute', value)}
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
                          error={validation['test']?.isInvalid}
                          helperText={validation['tst']?.message}
                        />
                      }
                    />

                    <TextField
                      variant="outlined"
                      select
                      label="Type"
                      fullWidth
                      disabled={loading}
                      value={item.type}
                      onChange={e => setFieldValue(i, 'type', e.target.value)}
                      style={{
                        marginTop: 10,
                        marginBottom: 10
                      }}
                      error={validation['field.attribute.id']?.isInvalid}
                      helperText={validation['field.attribute.id']?.message}
                      SelectProps={{
                        MenuProps: {
                          style: {
                            maxHeight: 500
                          }
                        }
                      }}
                    >
                      {typeOptions.map((option, i) => (
                        <MenuItem key={i} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    
                    {item.type === 'string' &&
                    <TextField
                      variant="outlined"
                      label="Options"
                      fullWidth
                      multiline
                      disabled={loading}
                      value={item.options}
                      onChange={e => setFieldValue(i, 'options', e.target.value)}
                      style={{
                        marginTop: 10,
                        marginBottom: 10
                      }}
                      error={validation['field.attribute.id']?.isInvalid}
                      helperText={validation['field.attribute.id']?.message}
                    />
                    }

                    {item.type === 'int' &&
                    <>
                      <NumberFormat
                        customInput={TextField}
                        variant="outlined"
                        label="Max"
                        value={item.max}
                        onValueChange={({ value }) => setFieldValue(i, 'max', value.trimLeft())}
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
                        value={item.min}
                        onValueChange={({ value }) => setFieldValue(i, 'min', value.trimLeft())}
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
                        checked={item.isRequired}
                        onChange={() => setFieldValue(i, 'isRequired', !item.isRequired)}
                        disabled={loading}
                      />
                    </div>

                    {item.type === 'string' &&
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
                          checked={item.isAutocomplete}
                          onChange={() => setFieldValue(i, 'isAutocomplete', !item.isAutocomplete)}
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
                          checked={item.isEnum}
                          onChange={() => setFieldValue(i, 'isEnum', !item.isEnum)}
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
                        <span>Multi</span>

                        <Switch
                          checked={item.isMulti}
                          onChange={() => setFieldValue(i, 'isMulti', !item.isMulti)}
                          disabled={loading}
                        />
                      </div>
                    </>
                    }
                  </div>
                </div>
              )
            })}

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center'
            }}>
              <Fab
                color="primary"
                style={{
                  boxShadow: 'none'
                }}
                onClick={() => {
                  setFields(prev => [...prev, obj])
                }}
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
  attributes: graphql`
    fragment CreateSpecificationFieldsModal_attributes on Attribute @relay(plural: true) {
      id,
      name
    }
  `
})