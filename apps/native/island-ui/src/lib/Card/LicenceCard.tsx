import React from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';
import { theme } from '@island.is/island-ui/theme';

const Host = styled.TouchableOpacity<{ bg?: string }>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 12px 24px;
  border-radius: 16px;
  background-color: ${props => props.bg ?? props.theme.color.blueberry100};
  margin-bottom: 16px;
`

const Content = styled.View`
  justify-content: center;
`;

const Title = styled.Text`
  font-family: 'IBM Plex Sans';
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
`;

const ValidationWrap = styled.View`
  font-family: 'IBM Plex Sans';
  font-weight: 600;
  display: flex;
  flex-flow: row;
`;

const Validation = styled.Text`
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: bold;
`;

const TimeStamp = styled.Text`
  font-size: 12px;
`;

const Img = styled.View`
`;


interface LicenceCardProps {
  title: string;
  icon: any;
  agencyLogo: any;
  backgroundColor: string;
  onPress(): () => void;
}

export function LicenceCard({ title, icon, backgroundColor, agencyLogo, onPress }: LicenceCardProps) {
  return (
    <Host onPress={() => onPress()} bg={backgroundColor}>
      <Content>
        <Title numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Title>
        <ValidationWrap>
          <Image source={icon} style={{ width: 13, height: 13, marginRight: 8 }} />
          <Validation>
          Í gildi
          </Validation>
        </ValidationWrap>

        <TimeStamp>
          16:24 - 14.03.2021
        </TimeStamp>
      </Content>
      <Img>
        <Image source={agencyLogo} style={{ width: 68, height: 87 }} />
      </Img>
    </Host>
  );
}
