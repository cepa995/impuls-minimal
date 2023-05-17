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
      <LearningSchedule audioPath={"/assets/img/gallery/audio___radionica_sa_raletom2023_sara_milošević.mp3"} audioFileName={"Radionica sa Raletom"}/>
      <GallaryPageMain gallary_data={[
  {
    id: 1,
    img: img_1,
    icon: 'flaticon-eye',
  },
  {
    id: 2,
    img: img_2,
    icon: 'flaticon-eye',
  },
]}/>
    </Wrapper>
  )
}