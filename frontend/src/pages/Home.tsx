import styled from 'styled-components'
import { TextCard } from '../components/TextCard'
import { Header } from '../components/Headers'

const Feed = styled.main`
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  display: grid;
  gap: 16px;
`

export default function Home() {
  return (
    <>
      <Header />
      <Feed>
        <TextCard />
        <TextCard />
        <TextCard />
      </Feed>
    </>
  )
}
