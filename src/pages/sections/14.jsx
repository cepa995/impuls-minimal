import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import HomeHero from "@components/heros/home-hero";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import GallaryPageMain from "@components/gallary/gallary-page-main";
import HeaderFour from "@layout/headers/headerFour";
import LearningSchedule from '@components/programs/program-details-page/learning-schedule';

import img_1 from "@assets/img/gallery/kostim__Anja_Kodić,_foto__Lara_Dragaš.jpg"
import img_2 from "@assets/img/gallery/kostim__Anja_Kodić,_kolaž__Anja_Kodić.jpg"
import img_3 from "@assets/img/gallery/kostim__Doroteja_Dević,_foto__Jelena_Kajtes.jpg"
import img_4 from "@assets/img/gallery/kostim__Doroteja_Dević,_kolaž__Doroteja_Dević.jpg"
import img_5 from "@assets/img/gallery/kostim__Isidora_Pokrajac,_foto__Jelena_Kajtes.jpg"
import img_6 from "@assets/img/gallery/kostim__Isidora_Pokrajac,_foto__Lara_Dragaš.jpg"
import img_7 from "@assets/img/gallery/kostim__Ivan_Nikolovski,_foto__Jovana_Dugonjic.jpg"
import img_8 from "@assets/img/gallery/kostim__Ivan_Nikolovski,_foto__Jovana_Dugonjic1.jpg"
import img_9 from "@assets/img/gallery/kostim__Ivan_Nikolovski,_foto__Jovana_Dugonjic_1.jpg"


import img_10 from "@assets/img/gallery/kostim__Jelena_Kajtes,_foto__Jelena_Kajtes.jpg"
import img_11 from "@assets/img/gallery/kostim__Jelena_Kajtes,_foto__Jelena_Kajtes_2.jpg"
import img_12 from "@assets/img/gallery/kostim__Lara_Dragaš,_foto__Jelena_Kajtes.jpg"
import img_13 from "@assets/img/gallery/kostim__Lara_Dragaš,_foto__Lara_Dragaš.jpeg"
import img_14 from "@assets/img/gallery/kostim__Lena_Jankov,_foto__Lena_Jankov.jpg"
import img_15 from "@assets/img/gallery/kostim__Lena_Jankov,_foto__Maja_Bogdanović.jpg"
import img_16 from "@assets/img/gallery/kostim__Lena_Jankov,_foto__Maja_Bogdanović_1.jpg"
import img_17 from "@assets/img/gallery/kostim__tanja_stefanović_foto__jelena_kajtes_2.jpg"
import img_18 from "@assets/img/gallery/kostim__tanja_stefanović_foto__jelena_kajtes_3.jpg"

export default function Program() {
  return (
    <Wrapper>
      <SEO pageTitle={'Šetnja'} />
      <HomeHero/>
      <LearningSchedule audioPath={"/assets/img/gallery/audio_kostimi_sa_sinteznog_jelena_kajtes_i_tanja_stefanović.mp3"} audioFileName={"Kostimi sa Sinteznog"}/>
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
  },
  {
    id: 8,
    img: img_8,
    icon: 'flaticon-eye',
  },
  {
    id: 9,
    img: img_9,
    icon: 'flaticon-eye',
  },
  {
    id: 10,
    img: img_10,
    icon: 'flaticon-eye',
  },
  {
    id: 11,
    img: img_11,
    icon: 'flaticon-eye',
  },
  {
    id: 12,
    img: img_12,
    icon: 'flaticon-eye',
  },
  {
    id: 13,
    img: img_13,
    icon: 'flaticon-eye',
  },
  {
    id: 14,
    img: img_14,
    icon: 'flaticon-eye',
  },
  {
    id: 15,
    img: img_15,
    icon: 'flaticon-eye',
  },
  {
    id: 16,
    img: img_16,
    icon: 'flaticon-eye',
  },
  {
    id: 17,
    img: img_17,
    icon: 'flaticon-eye',
  },
  {
    id: 18,
    img: img_18,
    icon: 'flaticon-eye',
  },
]}/>
    </Wrapper>
  )
}