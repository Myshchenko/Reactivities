import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../App/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "./details/ActivityDetail";
import ActivityForm from "./form/ActivityForm";

interface Props{
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) =>void;
    closeForm: () =>void;
    createOfEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default function ActivityDashboard({activities, selectedActivity,
                        selectActivity, cancelSelectActivity, editMode, 
                        openForm,  closeForm, createOfEdit, deleteActivity,
                        submitting}: Props){
    return(
        <Grid>
            <Grid.Column width='10'>
                 <ActivityList activities={activities} 
                            selectActivity={selectActivity}
                            deleteActivity={deleteActivity}
                            submitting={submitting}/> 
            </Grid.Column>
            <Grid.Column width="6">
                {selectedActivity && !editMode &&
                <ActivityDetails 
                        activity={selectedActivity} 
                        cancelSelectActivity={cancelSelectActivity}
                        openForm={openForm}  
                        />}
                {editMode &&
                <ActivityForm 
                      closeForm={closeForm} 
                      activity={selectedActivity} 
                      createOfEdit={createOfEdit}
                      submitting={submitting}   
                 />}
            </Grid.Column>
        </Grid>
    )
}