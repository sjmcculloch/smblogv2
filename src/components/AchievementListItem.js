import React from 'react'
import styled from 'styled-components'

const Achievement = styled.img`
  object-fit: contain;
  width: 100% !important;
  height: 100% !important;
`

const AchievementListItem = props => {
  const { image_url } = props

  return (
    <div>
      <Achievement src={image_url} />
    </div>
  )
}
export default AchievementListItem
