import { Meal as MealType } from "@utils/types";
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
  data: MealType;
};

export function Meal({ data, ...props }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container {...props}>
      <LeftWrapper>
        <Time>{data.time}</Time>
        <VerticalDivider />
        <MealTitle>{data.name}</MealTitle>
      </LeftWrapper>
      <Circle
        size={14}
        color={data.onDiet === "yes" ? COLORS.GREEN : COLORS.RED}
        weight="fill"
      />
    </Container>
  );
}
