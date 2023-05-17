import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import HomeHero from "@components/heros/home-hero";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import GallaryPageMain from "@components/gallary/gallary-page-main";
import HeaderFour from "@layout/headers/headerFour";
import LearningSchedule from '@components/programs/program-details-page/learning-schedule';

import img_1 from "@assets/img/gallery/KAMP_zorana_rabrenović__1_.jpg"
import img_2 from "@assets/img/gallery/KAMP_zorana_rabrenović__2_.jpg"
import img_3 from "@assets/img/gallery/KAMP_zorana_rabrenović__3_.jpg"
import img_4 from "@assets/img/gallery/KAMP_zorana_rabrenović__4_.jpg"
import img_5 from "@assets/img/gallery/KAMP_zorana_rabrenović__5_.jpg"
import img_6 from "@assets/img/gallery/KAMP_zorana_rabrenović__6_.jpg"
import img_7 from "@assets/img/gallery/KAMP_zorana_rabrenović__7_.jpg"

export default function Program() {
  return (
    <Wrapper>
      <SEO pageTitle={'Šetnja'} />
      <HomeHero/>
      <LearningSchedule audioPath={"/assets/img/gallery/audio___kamp_zorana_rabrenović.mp3"} audioFileName={"Kamp"}/>
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
  {
    id: 3,
    img: img_3,
    icon: 'flaticon-eye',
  },
  {
    id: 4,
    img: img_4,
    icon: 'flaticon-eye',
  },
  {
    id: 5,
    img: img_5,
    icon: 'flaticon-eye',
  },    
  {
    id: 6,
    img: img_6,
    icon: 'flaticon-eye',
  },
  {
    id: 7,
    img: img_7,
    icon: 'flaticon-eye',
  }
]}/>
    </Wrapper>
  )
}