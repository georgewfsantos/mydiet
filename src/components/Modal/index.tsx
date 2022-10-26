import { Button } from "@components/Button";
import { ModalProps } from "react-native";
import {
  Container,
  Content,
  ConfirmationText,
  ButtonGroup,
  ButtonWrapper,
  ModalWrapper,
} from "./styles";

type Props = ModalProps & {
  onCancel: () => void;
  onConfirmation: () => void;
};

export function Modal({ onCancel, onConfirmation, ...props }: Props) {
  return (
    <Container {...props}>
      <ModalWrapper>
        <Content>
          <ConfirmationText>
            Deseja realmente excluir o {"\n"} registro da refeição?
          </ConfirmationText>
          <ButtonGroup>
            <ButtonWrapper>
              <Button title="Cancelar" variant="outlined" onPress={onCancel} />
            </ButtonWrapper>

            <ButtonWrapper>
              <Button title="Sim, excluir" onPress={onConfirmation} />
            </ButtonWrapper>
          </ButtonGroup>
        </Content>
      </ModalWrapper>
    </Container>
  );
}
