import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import HomeHero from "@components/heros/home-hero";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import GallaryPageMain from "@components/gallary/gallary-page-main";
import HeaderFour from "@layout/headers/headerFour";
import LearningSchedule from '@components/programs/program-details-page/learning-schedule';

import img_1 from "@assets/img/gallery/Anđela_Kurevija_Paviljon_za_Impuls1__1_.jpg"
import img_2 from "@assets/img/gallery/Anđela_Kurevija_Paviljon_za_Impuls1__1_.png"
import img_3 from "@assets/img/gallery/Anđela_Kurevija_Paviljon_za_Impuls1__2_.jpg"
import img_4 from "@assets/img/gallery/Anđela_Kurevija_Paviljon_za_Impuls1__3_.jpg"
import img_5 from "@assets/img/gallery/Anđela_Kurevija_Paviljon_za_Impuls1__4_.jpg"

export default function Program() {
  return (
    <Wrapper>
      <SEO pageTitle={'Šetnja'} />
      <HomeHero/>
      <LearningSchedule audioPath={"/assets/img/gallery/1_audio___paviljon_anđela_kurevija.mp3"} audioFileName={"Paviljon"}/>
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
  }
]}/>
    </Wrapper>
  )
}