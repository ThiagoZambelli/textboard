import styled from 'styled-components'
import { TextCard } from '../components/TextCard'
import { Header } from '../components/Headers'
import type { Text } from '../types/Text'


const Feed = styled.main`
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  display: grid;
  gap: 16px;
`

const texts: Text[] = [
  {
    id: '1',
    title: 'Um pequeno conto',
    content: 'Era uma vez um desenvolvedor que decidiu voltar a programar…',
    author: {
      id: 'u1',
      name: 'Autor Exemplo',
      username: 'autor',
    },
    createdAt: new Date().toISOString(),
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <Feed>
        {texts.map(text => (
          <TextCard key={text.id} text={text} />
        ))}
      </Feed>
    </>
  )
}
