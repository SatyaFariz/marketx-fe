import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR } from '../../Constants'
import Color from '../../Constants/Color'
import BackButton from '../../Components/BackButton'
import { useState, useEffect, useRef } from 'react'
import { TextField, MenuItem, Switch } from '@material-ui/core'
import Button from '../../Components/Button'
import NumberFormat from 'react-number-format'
import useAppContext from '../../hooks/useAppContext'
import { Add } from '@material-ui/icons'
import { Autocomplete } from '@material-ui/lab'
import { Fab, ButtonBase } from '@material-ui/core'
import Validator from '../../../helpers/validator'

const Component = props => {
  const isMounted = useRef(true)
  const { pivotField } = props
  const [loading, setLoading] = useState(false)
  const [emptyErrorMessage, setEmptyErrorMessage] = useState(pivotField?.emptyErrorMessage || '')
  const [helperText, setHelperText] = useState(pivotField?.pivotField || '')
  const [options, setOptions] = useState(pivotField.options.map((field, i) => ({
    key: i,
    label: field.label || '',
    desc: field.desc || '',
    isDefault: field.isDefault || false
  })))

  const setFields = (i, key, value) => {
    setOptions(prev => {
      const copy = key === 'isDefault' && value === true ? prev.map(item => ({ ...item, isDefault: false })) : [...prev]
      copy[i][key] = value
      return copy
    })
  }

  const save = () => {

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
                        onClick={() => setOptions(prev => {
                          const copy = prev.slice()
                          return copy.filter((item, j) => idx !== j)
                        })}
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  pivotField: graphql`
    fragment EditPivotFieldModal_pivotField on PivotField {
        id,
        emptyErrorMessage,
        helperText,
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
  `
})