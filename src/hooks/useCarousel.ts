import { Breakpoint, useTheme } from "@mui/material";
import { useRef } from "react";
import { useWindowSize } from "usehooks-ts";

interface Option {
  gap: number;
  slidesToScroll?: number;
  slidesToShow?: number;
  behavior?: ScrollBehavior;
}

const breakpoints: Breakpoint[] = ["lg", "md", "sm", "xs"];

const useSlideToShow = (slidesToShow: number) => {
  const theme = useTheme();

  const { width } = useWindowSize();

  return slidesToShow -
    breakpoints.findIndex((key) => width > theme.breakpoints.values[key]) >=
    1
    ? slidesToShow -
        breakpoints.findIndex((key) => width > theme.breakpoints.values[key])
    : 1;
};

export const useCarousel = ({
  gap,
  slidesToScroll = 1,
  slidesToShow = 4,
  behavior = "smooth",
}: Option) => {
  const ref = useRef<HTMLDivElement>(null);

  const slides = useSlideToShow(slidesToShow);

  const childrenWidth = `calc(${100 / slides}% - ${
    ((slides - 1) * gap) / slides
  }px)`;

  const onNext = () =>
    ref?.current?.scroll({
      behavior,
      left:
        ref.current.scrollLeft +
        ((ref.current.scrollWidth - gap * (ref.current.childNodes.length - 1)) /
          ref.current.childNodes.length +
          gap) *
          slidesToScroll,
    });

  const onBack = () =>
    ref?.current?.scroll({
      behavior,
      left:
        ref.current.scrollLeft -
        ((ref.current.scrollWidth - gap * (ref.current.childNodes.length - 1)) /
          ref.current.childNodes.length +
          gap) *
          slidesToScroll,
    });

  return {
    ref,
    onNext,
    onBack,
    childrenWidth,
  };
};
