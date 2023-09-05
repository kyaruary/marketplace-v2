import {
  AudioHTMLAttributes,
  CSSProperties,
  ComponentPropsWithoutRef,
  FC,
  IframeHTMLAttributes,
  ReactElement,
  VideoHTMLAttributes,
} from 'react'

// type _Token1 = NonNullable<NonNullable<ReturnType<typeof useTokens>['data']>['0']>['token'];

export type MediaType =
  | 'mp4'
  | 'mp3'
  | 'wav'
  | 'gltf'
  | 'glb'
  | 'png'
  | 'jpeg'
  | 'jpg'
  | 'svg'
  | 'gif'
  | 'html'
  | 'other'
  | undefined
type Token = any

type TokenFallbackProps = {
  mode?: 'default' | 'simple'
  style?: CSSProperties
  className?: string
  token: ComponentPropsWithoutRef<typeof TokenMedia>['token']
  chainId?: number
  onRefreshClicked: () => void
}
declare const TokenFallback: FC<TokenFallbackProps>

type RequiredTokenProps = Pick<
  NonNullable<Token>,
  'image' | 'media' | 'collection' | 'tokenId' | 'imageSmall' | 'imageLarge'
>

interface TokenMediaProps {
  token?: RequiredTokenProps
  staticOnly?: boolean
  imageResolution?: 'small' | 'medium' | 'large'
  style?: CSSProperties
  className?: string
  modelViewerOptions?: any
  videoOptions?: VideoHTMLAttributes<HTMLVideoElement>
  audioOptions?: AudioHTMLAttributes<HTMLAudioElement>
  iframeOptions?: IframeHTMLAttributes<HTMLIFrameElement>
  disableOnChainRendering?: boolean
  chainId?: number
  fallbackMode?: ComponentPropsWithoutRef<typeof TokenFallback>['mode']
  fallback?: (mediaType: MediaType | null) => ReactElement | null
  onError?: (e: Event) => void
  onRefreshToken?: () => void
}

export function TokenMedia(props: TokenMediaProps): JSX.Element {
  return <></>
}
