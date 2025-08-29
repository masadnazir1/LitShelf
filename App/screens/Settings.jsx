import { StyleSheet } from 'react-native';
import ConfirmationDialog from '../components/Shared/ConfirmationDialog';
import Container from '../components/Shared/UniversalContainer';

import Button from '../components/Shared/Button';
import spacing from '../Theme/Spacing';
import { useNavigation } from '@react-navigation/native';
import DetailsHeader from '../components/Shared/DetailsHeader';
import MenueRows from '../components/Shared/MenueRows';
import ProfileUiCard from '../components/Shared/ProfileUiCard';
import { useState } from 'react';

const Settings = () => {
  const Navigate = useNavigation();
  const [ShowModel, setShowModel] = useState(false);

  //
  //
  const handleBookPress = () => {
    console.log('Navigate to Book Details');
  };

  return (
    <>
      <DetailsHeader title="Settings" onBackPress={() => Navigate.goBack()} />
      <Container style={style.Container} backgroundColor="#ecececff">
        <ProfileUiCard Name="M Asad Nazir" />
        <MenueRows title="Notifications" />
        <MenueRows title="About LitShelf" />

        <Button
          label="Log out"
          colorType="danger"
          variant="outline"
          onPress={() => setShowModel(true)}
        />
      </Container>
      <ConfirmationDialog
        visible={ShowModel}
        title="Confirm Logout"
        description="Do you really want to log out of your account?"
        onConfirm={() => setShowModel(false)}
        onCancel={() => setShowModel(false)}
      />
    </>
  );
};

export default Settings;

const style = StyleSheet.create({
  Container: {
    gap: spacing.lg,
    marginVertical: spacing.sm,
  },
  Button: {
    width: '50%',
  },
});
