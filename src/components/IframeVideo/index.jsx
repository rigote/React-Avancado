import * as S from './styles'

const IframeVideo = () => {
  return (
    <S.Wrapper>
      <iframe
        width="400px"
        height="565px"
        src="https://www.youtube.com/live_chat?v=QdgAJqF1SaU&amp;embed_domain=rigote-react-avancado.vercel.app"
      ></iframe>
    </S.Wrapper>
  )
}

export default IframeVideo
