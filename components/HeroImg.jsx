import Image from "next/image"

const HeroImg = ({ containerStyles, imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
        <Image src={imgSrc} alt="Hero Image" fill priority />
    </div>
  )
}
export default HeroImg