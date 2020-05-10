import React from 'react';
import { Button, View } from 'react-native';

import { useAuth } from '../../hooks/auth';
import SignIn from '../SignIn';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="sair" onPress={signOut} />
    </View>
  );
};

export default Dashboard;
