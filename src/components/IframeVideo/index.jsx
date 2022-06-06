import * as S from './styles'

const IframeVideo = () => {
  return (
    <S.Wrapper>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/QdgAJqF1SaU"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        width="150px"
        height="100px"
        src="https://www.youtube.com/live_chat?v=QdgAJqF1SaU&amp;embed_domain=rigote-react-avancado.vercel.app"
      ></iframe>
    </S.Wrapper>
  )
}

export default IframeVideo
