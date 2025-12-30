import type { Text } from '../../types/Text'
import { Card, Title, Content, Author } from './styles'

interface TextCardProps{
  text: Text
}

export function TextCard({text}:TextCardProps) {
  return (
    <Card>
      <Title>{text.title}</Title>
      <Content>{text.content}</Content>
      <Author>por {text.author.name}</Author>
    </Card>
  )
}
