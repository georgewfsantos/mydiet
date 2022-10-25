import { Circle } from "phosphor-react-native";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";
import {
  Container,
  LeftWrapper,
  Time,
  VerticalDivider,
  MealTitle,
} from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  time: string;
};

export function Meal({ title, time, ...props }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container {...props}>
      <LeftWrapper>
        <Time>{time}</Time>
        <VerticalDivider />
        <MealTitle>{title}</MealTitle>
      </LeftWrapper>
      <Circle size={14} color={COLORS.RED} weight="fill" />
    </Container>
  );
}
