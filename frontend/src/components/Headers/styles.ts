import styled from 'styled-components'

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.md};
`

export const Title = styled.h1`
  font-size: 1.25rem;
`
