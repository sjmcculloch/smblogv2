import React, { Fragment } from 'react'
import styled from 'styled-components'

const Record = styled.li`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
`

const RecordIcon = styled.img`
  height: 37px;
  margin-bottom: 6px;
`

const RecordTitle = styled.span`
  line-height: 1.4em;
  letter-spacing: 0.02em;
  font-size: 12px;
  font-weight: 500;
  color: rgb(64, 101, 153);
  opacity: 0.9;
  margin-bottom: 4px;
`

const RecordCount = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5em;
`

const RecordListItem = props => {
  const { name, records, iconSrc, slug } = props

  return (
    <Fragment>
      {records
        .sort((a, b) => (a.value > b.value ? 1 : -1))
        .map(record => {
          return (
            <Record>
              <RecordIcon src={iconSrc} alt={slug} />
              <RecordTitle>{name}</RecordTitle>
              <RecordTitle>{record.name}</RecordTitle>
              <RecordCount>
                {record.value} {record.unit}
              </RecordCount>
            </Record>
          )
        })}
    </Fragment>
  )
}

export default RecordListItem
