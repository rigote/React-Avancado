import * as S from './styles'

const IframeVideo = () => {
  return (
    <S.Wrapper>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/live_chat?v=12345&embed_domain=https://rigote-react-avancado.vercel.app/"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </S.Wrapper>
  )
}

export default IframeVideo
