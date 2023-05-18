import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import HomeHero from "@components/heros/home-hero";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import GallaryPageMain from "@components/gallary/gallary-page-main";
import HeaderFour from "@layout/headers/headerFour";
import LearningSchedule from '@components/programs/program-details-page/learning-schedule';

import img_1 from "@assets/img/gallery/Priručnik_za_istraživanje_fenomena.jpg"
import img_2 from "@assets/img/gallery/isidora_pokrajac_CUBEUS_1.jpg"
import img_3 from "@assets/img/gallery/isidora_pokrajac_CUBEUS_2.jpg"

export default function Program() {
  return (
    <Wrapper>
      <SEO pageTitle={'Šetnja'} />
      <HomeHero/>
      <LearningSchedule audioPath={"/assets/img/gallery/audio_Fenomenologija scenskog dizajna.mp3"} audioFileName={"Fenomenologija"}/>
      <GallaryPageMain gallary_data={[
        {
            id: 1,
            img: img_1,
            icon: 'flaticon-eye',
        },
    ]}/>
    </Wrapper>
  )
}