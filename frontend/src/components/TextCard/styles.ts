import styled from 'styled-components'

export const Card = styled.article`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`

export const Title = styled.h2`
  font-size: 1rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

export const Content = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.9rem;
`
