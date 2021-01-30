import React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    SimpleForm,
    Edit,
    ReferenceInput,
    TextInput,
    SelectInput,
    Create,
    Filter,
    SimpleList
} from "react-admin";
import { useMediaQuery } from '@material-ui/core';


const PostFilter = props => {
    return (
        <Filter { ...props }>
            <TextInput label="Search" source="q" alwaysOn />
            <ReferenceInput label="User" source="userId" reference="usres" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </Filter>
    )
}

export const PostList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down("sm"));
    return (
        <List filters={ <PostFilter /> } { ...props }>
            {isSmall ?
                (
                    <SimpleList key={ record => record.id }
                        primaryText={ record => record.title }
                        secondaryText={ record => `${ record.views } views` }
                        tertiaryText={ record => new Date().toLocaleDateString() }
                    />
                ) : (
                    <Datagrid key="id">
                        <TextField source="id" />
                        <ReferenceField label="User" source="userId" reference="users">
                            <TextField source="name" />
                        </ReferenceField>
                        <TextField source="title" />
                        <EditButton />
                    </Datagrid>
                )
            }
        </List>
    )
}

const PostTitle = ({ record }) => {
    return <span>Post { record ? `"${ record.title }"` : "" }</span>
}

export const PostEdit = props => (
    <Edit title={ <PostTitle /> } { ...props }>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create { ...props }>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);
