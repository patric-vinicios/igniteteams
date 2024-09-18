import { useState, useCallback } from 'react'
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { groupsGetAll } from '@storage/group/groupsGetAll';

import { Header } from '@components/Header';
import { GroupCard } from '@components/GroupCard';
import { Highlight } from '@components/Highlight';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import * as S from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll()
      setGroups(data)
    } catch(error) {
      console.log(error);
    }
  }

  useFocusEffect(useCallback(() => {
    console.log("executou")
    fetchGroups()
  }, []))

  return (
    <S.Container>
      <Header />
      <Highlight
        title="Turmas"
        subtitle="Jogue com sua turma"
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <GroupCard
            title={item}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flexGrow: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Button
        title="Criar nova turma"
        onPress={handleNewGroup}
      />
    </S.Container>
  );
}