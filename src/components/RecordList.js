import React, { Fragment } from 'react'
import styled from 'styled-components'

const RecordWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
  clip-path: inset(0px 20px);
  padding: 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    row-gap: 24px;
    clip-path: none;
  }
`

import RecordListItem from './RecordListItem'

class RecordList extends React.Component {
  render() {
    const { records } = this.props

    return (
      <Fragment>
        <RecordWrapper>
          {records.map(record => {
            const props = {
              name: record.name,
              slug: record.slug,
              iconSrc: record.icon_url,
              records: record.records,
            }
            return <RecordListItem key={props.slug} {...props} />
          })}
        </RecordWrapper>
      </Fragment>
    )
  }
}
export default RecordList
