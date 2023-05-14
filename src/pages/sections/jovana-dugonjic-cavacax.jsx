import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import HomeHero from "@components/heros/home-hero";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import GallaryPageMain from "@components/gallary/gallary-page-main";
import HeaderFour from "@layout/headers/headerFour";
import LearningSchedule from '@components/programs/program-details-page/learning-schedule';

import img_1 from "@assets/img/gallery/Jovana_Dugonjic_CAVACAX.jpg"
import img_2 from "@assets/img/gallery/Jovana_Dugonjic_CAVACAX_1.jpg"
import img_3 from '@assets/img/gallery/3.png';
import img_4 from '@assets/img/gallery/4.png';
import img_5 from '@assets/img/gallery/d1.png';

import img_6 from '@assets/img/gallery/d1.png';
import img_7 from '@assets/img/gallery/d2.png';
import img_8 from '@assets/img/gallery/d3.png';
import img_9 from '@assets/img/gallery/d5.png';
import img_10 from '@assets/img/gallery/d6.png';
import img_11 from '@assets/img/gallery/d7.png';

import img_1A from '@assets/img/gallery/d1.png';
import img_1B from '@assets/img/gallery/d4.png';
import img_1C from '@assets/img/gallery/d7.png';
import img_1D from '@assets/img/gallery/d8.png';

export default function Program() {
  return (
    <Wrapper>
      <SEO pageTitle={'Šetnja'} />
      <HomeHero/>
      <LearningSchedule audioFileName={"Cavacax"}/>
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
  }
]}/>
    </Wrapper>
  )
}