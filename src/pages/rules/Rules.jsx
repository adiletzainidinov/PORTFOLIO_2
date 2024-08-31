import React from 'react';
import { List, ListItemText } from '@mui/material';
import {
  ButtonStyle,
  ContentContainer,
  PageContainer,
  StyledListItem,
  StyledTypography,
} from './StyleRules';
import { useDispatch, useSelector } from 'react-redux';
import { rulesFalse } from '../../store/slices/edit-profile-slice/editProfileSlice';

const Rules = () => {
  const dispatch = useDispatch()

  const handleRules = () => {
    dispatch(rulesFalse())
  }

  return (
    <PageContainer>
      <ContentContainer>
        <StyledTypography variant="h3" gutterBottom>
          Правила редактирования
        </StyledTypography>
        <List sx={{ padding: '0', margin: '0' }}>
          {[
            'Для изменения информации просто кликните на нужный элемент.',
            'После клика появится поле, где вы сможете внести изменения.',
            'Внесите необходимые изменения и не забудьте сохранить результат.',
            'В некоторых полях есть ограничения на количество символов. Это сделано для того, чтобы информация корректно отображалась на всех устройствах. Максимальное количество символов может варьироваться в зависимости от типа данных.',
            'Благодарим за понимание и надеемся, что вам будет удобно использовать наше приложение!',
          ].map((rule, index) => (
            <StyledListItem
              key={index}
              sx={{ animationDelay: `${index * 0.3}s` }}
            >
              <ListItemText primary={rule} sx={{ color: 'white' }} />
            </StyledListItem>
          ))}
        </List>
        <ButtonStyle onClick={handleRules}>Ознакомлен</ButtonStyle>
      </ContentContainer>
    </PageContainer>
  );
};

export default Rules;
