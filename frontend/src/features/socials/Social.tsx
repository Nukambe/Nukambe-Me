import type { Social as SocialType } from "./socialSlice"

export default function Social({ social }: { social: SocialType }) {
  return (
    <a href={social.link} target="_blank" rel="noreferrer noopener nofollow">
      <img src={social.image} alt={social.title} style={{ width: 32 }} />
    </a>
  )
}
