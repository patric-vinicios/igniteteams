import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { Highlight } from '@components/Highlight'
import * as S from './styles'
import { useNavigation } from '@react-navigation/native'

export function NewGroup() {
    const navigation = useNavigation()

    function handleNew() {
        navigation.navigate('players', {group: 'Rocket'})
    }

    return (
        <S.Container>
            <Header showBackButton />

            <S.Content>
                <S.Icon />

                <Highlight
                    title="Nova Turma"
                    subtitle="Crie a turma para adicionar pessoas"
                />

                <Input
                    placeholder="Nome da turma"
                />

                <Button
                    title="Criar"
                    style={{marginTop: 20}}
                    onPress={handleNew}
                />

            </S.Content>

        </S.Container>
    )
}