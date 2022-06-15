import * as S from './styles'

const IframeVideo = () => {
  return (
    <S.Wrapper>
      <iframe
        width="400px"
        height="800px"
        src="https://www.youtube.com/live_chat?v=UCAGwGkphtN9uo7Ts4gsa2-g&amp;embed_domain=rigote-react-avancado.vercel.app"
      ></iframe>
    </S.Wrapper>
  )
}

export default IframeVideo
