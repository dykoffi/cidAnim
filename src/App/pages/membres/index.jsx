import React from "react"
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { Pivot, PivotItem, Dialog, DialogFooter, DialogType, ChoiceGroup, DefaultButton, Stack, TextField } from "@fluentui/react"
import { useBoolean } from '@fluentui/react-hooks';
import CardPerso from "../../components/cardPerso";
import membres from '../../assets/images/fond1.jpeg'
import projets from '../../assets/images/fond2.jpeg'
import equip from '../../assets/images/fond1.jpeg'
import cel from '../../assets/images/fond3.jpeg'

const Responsable = () => {


    return (
        <div className="grid md:grid-cols-4 2xl:grid-cols-5  gap-4 p-5">
            <CardPerso image={membres} />
            <CardPerso image={projets} />
            <CardPerso image={equip} />
            <CardPerso image={cel} />
            <CardPerso image={membres} />
            <CardPerso image={projets} />
            <CardPerso image={equip} />
            <CardPerso image={cel} />
        </div>
    )
}

const Etudiant = () => {


    return (
        <div className="p-5">
            <h1>Liste des etudiants</h1>
        </div>
    )
}



const Membre = () => {
    const dialogContentProps = {
        type: DialogType.largeHeader,
        title: 'Ajouter un nouveau membre',
        subText: 'Vueillez remplir tous les champs avant la validation du formulaire',
    };
    const options = [
        { key: 'responsable', text: 'Responsable' },
        { key: 'etudiant', text: 'Étudiant' },
    ];
    const modelProps = {
        isBlocking: false,
        styles: { main: { maxWidth: 450 } },
    };
    const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);

    return (
        <div className="">
            <div className="flex sticky top-0">
                <SearchBox
                    placeholder="Rechercher un membre"
                    onEscape={ev => {
                        console.log('Custom onEscape Called');
                    }}
                    onClear={ev => {
                        console.log('Custom onClear Called');
                    }}
                    onChange={(_, newValue) => console.log('SearchBox onChange fired: ' + newValue)}
                    onSearch={newValue => console.log('SearchBox onSearch fired: ' + newValue)}
                />
                <PrimaryButton className="mx-5" iconProps={{ iconName: "Add" }} onClick={toggleHideDialog}>Nouveau membre</PrimaryButton>
            </div>
            <Dialog
                hidden={hideDialog}
                onDismiss={toggleHideDialog}
                dialogContentProps={dialogContentProps}
                modalProps={modelProps}
            >
                <Stack className="space-y-2">
                    <TextField placeholder="nom" />
                    <TextField placeholder="contact" />
                    <TextField placeholder="email" />
                    <TextField placeholder="titre" />
                    <TextField placeholder="Photo" />
                    <ChoiceGroup options={options} />
                </Stack>
                <DialogFooter>
                    <DefaultButton onClick={toggleHideDialog} text="Retour" />
                    <PrimaryButton onClick={toggleHideDialog} text="Enregistrer" />
                </DialogFooter>
            </Dialog>
            <Pivot aria-label="Pivot des membres" className="mt-5">
                <PivotItem
                    headerText="Responsables (30)"
                    headerButtonProps={{ 'data-order': 1 }}
                >
                    <Responsable />
                </PivotItem>
                <PivotItem headerText="Étudiants (12)">
                    <Etudiant />
                </PivotItem>
            </Pivot>
        </div>
    )
}

export default Membre