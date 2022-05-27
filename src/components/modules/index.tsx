// Base content modules
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Jumbotron from "./Jumbotron";
import ImageWithCaption from "./ImageWithCaption";
import BulletedList from "./BulletedList";
import Contacts from "./Contacts";
import CarouselOfImages from "./CarouselOfImages";
import Stages from "./Stages";

// Jumbotron column modules
import TextWithLabel from "./TextWithLabel";
import FlagWithLabel from "./FlagWithLabel";

export default {
  base: [
    Jumbotron,
    Heading,
    Paragraph,
    ImageWithCaption,
    BulletedList,
    Contacts,
    CarouselOfImages,
    Stages,
  ],
  jumbotron: [
    TextWithLabel,
    FlagWithLabel,
  ]
}
