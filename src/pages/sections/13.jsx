import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import HomeHero from "@components/heros/home-hero";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import GallaryPageMain from "@components/gallary/gallary-page-main";
import HeaderFour from "@layout/headers/headerFour";
import LearningSchedule from '@components/programs/program-details-page/learning-schedule';

import img_1 from "@assets/img/gallery/Radionica_1_SM.jpg"
import img_2 from "@assets/img/gallery/Radionica_2_SM.png"

export default function Program() {
  return (
    <Wrapper>
      <SEO pageTitle={'Šetnja'} />
      <HomeHero/>
      <LearningSchedule audioPath={"/assets/img/gallery/audio _ šišarka_isidora pokrajac.mp3"} audioFileName={"Šišarka"}/>
      
        <div className="bd-gallery-area p-relative pt-120 pb-95 p-relative">
            <div className="container">
                <div className="row">
                    <iframe
                    src="https://player.vimeo.com/video/827747410?h=c0ad8977f2&title=0&sidedock=0&controls=1&autoplay=1&loop=1&muted=1"
                    width="100%"
                    height="771"
                    className="youtube-video"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                    title="1"
                    sidedock="0"
                    ></iframe>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}