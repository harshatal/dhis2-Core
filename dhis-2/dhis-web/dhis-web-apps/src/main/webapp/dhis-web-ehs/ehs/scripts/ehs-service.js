/**
 * Created by mithilesh.
 */

trackerCapture


    .service('AjaxCalls', function($http) {
        var foodsafetyid;
        return{

            getTEIbyId : function(id){
                var promise = $http.get(  '../api/trackedEntityInstances/'+id).then(function(response){

                    return response.data;
                });
                return promise;
            },
            getEventbyId : function(id){
                var promise = $http.get(  '../api/events/'+id).then(function(response){

                    return response.data;
                });
                return promise;
            },
            getNoProgramAttributes : function(){
                var promise = $http.get(  '../api/trackedEntityAttributes.json?paging=false&filter=displayInListNoProgram:eq:true&fields=:all').then(function(response){
                    return response.data;
                });
                return promise;
            },
            getALLTEIBYOperate : function() {


               var promise= $http.get('../api/trackedEntityInstances/w8kYzsMDQHa.json?program=ieLe1vT4Vad&ouMode=ALL&skipPaging=true').then(function (response) {
                   return response.data;

                });
                return promise;
            },
            getTrackedEntities : function(){
                var promise = $http.get(  '../api/trackedEntities.json?paging=false').then(function(response){
                    return response.data;
                });
                return promise;
            },

            //http://127.0.0.1:8090/dhis/api/trackedEntityInstances.json?program=y6lXVg8TdOj&ou=sGXSQmbYeMk
            //http://127.0.0.1:8090/dhis/api/events/IVUDkb8kK6n.json?fields=eventMembers&paging=false

            //../api/trackedEntityInstances.json?program=y6lXVg8TdOj&ou=sGXSQmbYeMk&paging=false

            getTrackedEntityInstancesByOrgUnitAndProgram : function(){
                var promise = $http.get(  '../api/events/IVUDkb8kK6n.json?fields=eventMembers&paging=false').then(function(response){
                    return response.data;
                });
                return promise;
            },

            /*
             getTrackedEntityInstancesByOrgUnitAndProgram : function(){
             var promise = $http.get(  '../api/events/IVUDkb8kK6n.json?fields=eventMembers&paging=false').then(function(response){
             return response.data;
             });
             return promise;
             },
             */
            //http://127.0.0.1:8090/dhis/api/events.json?programStage=s9b0ZMF7QZU&trackedEntityInstance=JND71K1mcXt&paging=false
            getEventsByTrackedEntityInstancesAndProgramStage  : function( inviteTEI ){
                var promise = $http.get(  '../api/events.json?programStage=s9b0ZMF7QZU&trackedEntityInstance=' + inviteTEI + '&paging=false').then(function(response){
                    return response.data;
                });
                return promise;
            },


            getEventsByTrackedEntityInstancesAndProgramStageUid  : function( programStageUid, inviteTEI ){
                var promise = $http.get(  '../api/events.json?programStage=' + programStageUid + '&trackedEntityInstance=' + inviteTEI + '&paging=false').then(function(response){
                    return response.data;
                });
                return promise;
            },


            //http://127.0.0.1:8090/dhis/api/events/IVUDkb8kK6n.json?paging=false
            getEventMemberByEvent  : function( eventUid ){
                var promise = $http.get(  '../api/events/'+eventUid + '.json?paging=false').then(function(response){
                    return response.data;
                });
                return promise;
            },

            getRootOrgUnit : function(){
                var promise = $http.get(  '../api/organisationUnits?filter=level:eq:1').then(function(response){
                    return response.data;
                });
                return promise;
            },

            //http://127.0.0.1:8090/dhis/api/userGroups/JNI1blJo433.json?fields=users[id,name],attributeValues&paging=false
            getUserGroupMember : function( userGroupUid ){
                var promise = $http.get('../api/userGroups/' + userGroupUid + '.json?fields=users[id,name]&paging=false').then(function (response) {

                    return response.data;
                });
                return promise;
            },

            getAllDataElements : function(){
                var promise = $http.get('../api/dataElements?fields=id,name,attributeValues[attribute[id,code],value]&paging=false').then(function (response) {

                    return response.data;
                });
                return promise;
            },

            getInvitationAndAttendedWidgetAttributes : function(){
                var promise = $http.get(  '../api/trackedEntityAttributes?fields=*,attributeValues[*,attribute[id,name,code]]&paging=false').then(function(response){
                    var associationWidgets = [];

                    if (!response.data.trackedEntityAttributes)
                        return associationWidgets;

                    for (var i=0;i<response.data.trackedEntityAttributes.length;i++){
                        if (response.data.trackedEntityAttributes[i].attributeValues)
                            for (var j=0;j<response.data.trackedEntityAttributes[i].attributeValues.length;j++){
                                if (response.data.trackedEntityAttributes[i].attributeValues[j].attribute.code=="ToBeShownInInvitationAndAttendendWidget"){
                                    if (response.data.trackedEntityAttributes[i].attributeValues[j].value){
                                        associationWidgets.push(response.data.trackedEntityAttributes[i]);
                                    }
                                }
                            }
                    }
                    return associationWidgets;
                });
                return promise;
            },

            //http://127.0.0.1:8090/dhis/api/constants.json?fields=id,name,code,value&paging=false
            //http://127.0.0.1:8090/dhis/api/events/eiJhAJKV5gb.json
            getThresholdConstantValue : function( thresholdCode ){
                var promise = $http.get(  '../api/constants.json?fields=id,name,code,value&paging=false').then(function(response){

                    var thresholdConstantValue = 0;
                    if( !response.data.constants )
                    {
                        return thresholdConstantValue;
                    }

                    for(var j=0; j<response.data.constants.length; j++){
                        if( response.data.constants[j].code === thresholdCode )
                        {
                            thresholdConstantValue = response.data.constants[j].value;
                        }
                    }

                    return thresholdConstantValue;
                });
                return promise;
            },




            //http://127.0.0.1:8090/dhis/api/events/eiJhAJKV5gb.json
            getEventDataValue : function( eventUid, dataElementUid ){
                var promise = $http.get(  '../api/events/'+eventUid + '.json?paging=false').then(function(response){

                    var inspectionScoreDataElementValue = 0;
                    if( !response.data.dataValues )
                    {
                        return inspectionScoreDataElementValue;
                    }

                    for(var j=0; j<response.data.dataValues.length; j++){
                        if( response.data.dataValues[j].dataElement === dataElementUid )
                        {
                            inspectionScoreDataElementValue = response.data.dataValues[j].value;
                        }
                    }

                    return inspectionScoreDataElementValue;
                });
                return promise;
            },

            // get Complete InspectionScore
            getInspectionScore : function( eventUid, inspectionScoreValueMap, dataElementUid ){
                var promise = $http.get(  '../api/events/'+eventUid + '.json?paging=false').then(function(response){
                    //alert( 2 + 5 + "8");
                    //window.document.write(" test "  );
                    var inspectionScoreValue = 0;
                    if( !response.data.dataValues )
                    {
                        return inspectionScoreValue;
                    }

                    for(var j=0; j<response.data.dataValues.length; j++)
                    {
                        try
                        {
                            if( parseInt ( response.data.dataValues[j].value ) >= 1 && response.data.dataValues[j].dataElement != dataElementUid)
                            {
                                //inspectionScoreValue = parseInt ( inspectionScoreValue ) + parseInt ( inspectionScoreValueMap[response.data.dataValues[j].dataElement] );
                                inspectionScoreValue = parseInt ( inspectionScoreValue ) + parseInt ( response.data.dataValues[j].value );
                            }
                        }
                        catch ( e )
                        {
                            alert("Error: " + e.description );
                        }

                    }

                    return inspectionScoreValue;
                });
                return promise;
            },






            setfoodsafetyid :function(value)
            {
                 foodsafetyid=value;
            },
            getfoodsafetyid :function()
            {
                return foodsafetyid;
            },
            // get all program in food safety//

            getFoodSafetyProgram : function(){
                var promise = $http.get(  '../api/programs.json?fields=id,name,code,attributeValues[attribute[id,name,code],value]&paging=false').then(function(response){
                    var associationWidgets = [];

                    if (!response.data.programs)
                        return associationWidgets;

                    for (var i=0;i<response.data.programs.length;i++){
                        if (response.data.programs[i].attributeValues)
                            for (var j=0;j<response.data.programs[i].attributeValues.length;j++){

                                    if (response.data.programs[i].attributeValues[j].value=="Food Safety"){
                                        associationWidgets.push(response.data.programs[i]);
                                    }

                            }
                    }
                    return associationWidgets;
                });
                return promise;
            },

            setwatersafetyid :function(value)
            {
                foodsafetyid=value;
            },
            getwatersafetyid :function()
            {
                return foodsafetyid;
            },
            getWaterSafetyProgram : function(){
                var promise = $http.get(  '../api/programs.json?fields=id,name,code,attributeValues[attribute[id,name,code],value]&paging=false').then(function(response){
                    var associationWidgets = [];

                    if (!response.data.programs)
                        return associationWidgets;

                    for (var i=0;i<response.data.programs.length;i++){
                        if (response.data.programs[i].attributeValues)
                            for (var j=0;j<response.data.programs[i].attributeValues.length;j++){

                                if (response.data.programs[i].attributeValues[j].value=="Water Safety"){
                                    associationWidgets.push(response.data.programs[i]);
                                }

                            }
                    }
                    return associationWidgets;
                });
                return promise;
            },











            // end//

            getAssociationWidgetAttributes : function(){
                var promise = $http.get(  '../api/trackedEntityAttributes?fields=*,attributeValues[*,attribute[id,name,code]]&paging=false').then(function(response){
                    var associationWidgets = [];

                    if (!response.data.trackedEntityAttributes)
                        return associationWidgets;

                    for (var i=0;i<response.data.trackedEntityAttributes.length;i++){
                        if (response.data.trackedEntityAttributes[i].attributeValues)
                            for (var j=0;j<response.data.trackedEntityAttributes[i].attributeValues.length;j++){
                                if (response.data.trackedEntityAttributes[i].attributeValues[j].attribute.code=="ToBeShownInAssociationWidget"){
                                    if (response.data.trackedEntityAttributes[i].attributeValues[j].value == "true"){
                                        associationWidgets.push(response.data.trackedEntityAttributes[i]);
                                    }
                                }
                            }
                    }

                    return associationWidgets;
                });
                return promise;
            },
/************savita modified *********************/

            /*****************************/
            // Get all Events for TEI UID
            getAllEventsByTEI: function (teiId) {
                var promise = $http.get('../api/events?trackedEntityInstance=' + teiId).then(function (response) {
                    return response.data;
                });
                return promise;
            },
            // http://127.0.0.1:8090/dhis/api/programStages?fields=id,name,attributeValues[attribute[id,code],value]&paging=false
            getAllProgramStages : function(fields){
                var promise = $http.get('../api/programStages?fields='+fields+'&paging=false').then(function (response) {
                    return response.data;
                });
                return promise;
            }

        }

    })

    .service('utilityService', function( AjaxCalls ) {
        return {
            prepareIdToObjectMap: function (object, id) {
                var map = [];
                for (var i = 0; i < object.length; i++) {
                    map[object[i][id]] = object[i];
                }
                return map;
            },
            extractMetaAttributeValue : function(attributeValues,code){
                var value = undefined;
                for (var i=0;i<attributeValues.length;i++){
                    if (attributeValues[i].attribute.code == code){
                        value = attributeValues[i].value;
                    }
                }
                return value;
            },
            getAlreadyAttendedTEIMap: function (programStageUid, inviteTEI) {

                var alreadyAttendedTEIMap = [];
                var def = $.Deferred();

                AjaxCalls.getEventsByTrackedEntityInstancesAndProgramStageUid(programStageUid, inviteTEI).then(function (attendEvents) {

                    if( attendEvents.events[0].event )
                    {
                        var attendEvent = attendEvents.events[0].event;

                        AjaxCalls.getEventMemberByEvent( attendEvent ).then(function( alreadyAttendedTEIs ){

                            var attendTrackedEntityInstanceList = alreadyAttendedTEIs;

                            AjaxCalls.getEventsByTrackedEntityInstancesAndProgramStage( inviteTEI ).then(function(inviteEventMember){

                                var inviteEventUid = inviteEventMember.events[0].event;

                                AjaxCalls.getEventMemberByEvent( inviteEventUid ).then(function(invitedTrackedEntityInstances){

                                    var invitedTrackedEntityInstanceList = invitedTrackedEntityInstances;

                                    if( invitedTrackedEntityInstanceList.eventMembers )
                                    {
                                        if( attendTrackedEntityInstanceList.eventMembers )
                                        {
                                            for (var i=0;i<invitedTrackedEntityInstanceList.eventMembers.length;i++)
                                            {
                                                for (var j=0;j<attendTrackedEntityInstanceList.eventMembers.length;j++)
                                                {
                                                    if( invitedTrackedEntityInstanceList.eventMembers[i].trackedEntityInstance == attendTrackedEntityInstanceList.eventMembers[j].trackedEntityInstance)
                                                    {
                                                        alreadyAttendedTEIMap[ attendTrackedEntityInstanceList.eventMembers[j].trackedEntityInstance] = true;

                                                        //console.log(  " alreadyAttended -- " +  $scope.attendTrackedEntityInstanceList.eventMembers[j].trackedEntityInstance );
                                                        break;
                                                    }
                                                    else
                                                    {
                                                        alreadyAttendedTEIMap[ invitedTrackedEntityInstanceList.eventMembers[i].trackedEntityInstance] = false;
                                                        //console.log(  " invited -- " +  $scope.invitedTrackedEntityInstanceList.eventMembers[i].trackedEntityInstance );
                                                    }
                                                }
                                            }
                                        }

                                        def.resolve( alreadyAttendedTEIMap );
                                    }

                                });

                            });
                        });
                    }

                });

                return def;
                //return alreadyAttendedTEIMap;
            }
        }
    })



    .service('AssociationService', function (AjaxCalls,DHIS2EventFactory,$timeout,$rootScope) {
        return {
            extractAllEventMembers: function (events) {
                var eventMembers = [];
                var eventMembersMap = [];
                for (var i = 0; i < events.length; i++) {
                    if (events[i].eventMembers) {
                        for (var j = 0; j < events[i].eventMembers.length; j++) {
                            if (!eventMembersMap[events[i].eventMembers[j].trackedEntityInstance]) {
                                eventMembers.push(events[i].eventMembers[j]);
                                eventMembersMap[events[i].eventMembers[j].trackedEntityInstance] = events[i].eventMembers[j];
                            }
                        }
                    }
                }
                return eventMembers;
            },
            addEventMembersToEventAndUpdate: function (event) {
                var thiz = this;
                // this will add association to event
                // get all events of this TEI and extract all event members to add to this event
                AjaxCalls.getAllEventsByTEI(event.trackedEntityInstance).then(function (data) {

                    var allEventMembers = thiz.extractAllEventMembers(data.events);
                    if (allEventMembers.length > 0) {
                        event.eventMembers = allEventMembers;
                    }
                    DHIS2EventFactory.update(event).then(function(response){
                        if (response.httpStatus == "OK"){
                            console.log("EventMembers added successfully");
                            $timeout(function () {
                                $rootScope.$broadcast('association-widget', {event : event , show :true});
                            });
                        }else{
                            console.log("An unexpected thing occurred.");
                        }
                    })
                })

            },
            addEventMemberIfExist : function(eventTo,eventFrom){
                if (eventFrom.eventMembers)
                    eventTo.eventMembers = eventFrom.eventMembers;
                return eventTo;
            }
        }
    })

    // inspection Score Calculation related methods

    .service('EventDataValueService', function (AjaxCalls,DHIS2EventFactory,$timeout,$rootScope) {
        return {

            updateInspectionScore: function ( inspectionScoreValueMap, eventForSave, inspectionScoreDataElementUid, inspectionStatusDataElementUid, thresholdValueForFS) {

                var finalInspectionScore = 0;
                var finalInspectionStatus = 0;
                var def = $.Deferred();

                AjaxCalls.getInspectionScore( eventForSave.event, inspectionScoreValueMap, inspectionScoreDataElementUid ).then(function ( responseScore ) {

                    finalInspectionScore = responseScore;
                    console.log( "initial Score -- " + finalInspectionScore );
                    //if( responseScore )
                    //{
                    /*
                     for( var key in referenceScoreValueMap )
                     {
                     finalInspectionScore = parseInt ( finalInspectionScore ) + parseInt( referenceScoreValueMap[key] );
                     }
                     */

                    if( parseInt( finalInspectionScore ) >= thresholdValueForFS )
                    {
                        finalInspectionStatus = '1';
                    }
                    else
                    {
                        finalInspectionStatus = '-1';
                    }


                    var finalScoreEventDataValue = {event: eventForSave.event,
                        orgUnit: eventForSave.orgUnit,
                        program: eventForSave.program,
                        programStage: eventForSave.programStage,
                        status: eventForSave.status,
                        trackedEntityInstance: eventForSave.trackedEntityInstance,
                        dataValues: [
                            {
                                dataElement: inspectionScoreDataElementUid,
                                value: finalInspectionScore,
                                providedElsewhere: eventForSave.providedElsewhere[inspectionScoreDataElementUid] ? true : false
                            },
                            {
                                dataElement: inspectionStatusDataElementUid,
                                value: finalInspectionStatus,
                                providedElsewhere: eventForSave.providedElsewhere[inspectionStatusDataElementUid] ? true : false
                            },
                        ]
                    };

                    DHIS2EventFactory.updateForSingleValue(finalScoreEventDataValue).then(function ( dataValueSaveResponse ) {

                        if( dataValueSaveResponse.httpStatus === "OK")
                        {
                            def.resolve( finalInspectionScore );
                        }
                    });

                    //}
                });

                return def;
            },

            updateMap: function ( value, selectedDEUid, dataElementsAndValueForCalculationMap ) {

                var def = $.Deferred();

                if( value != "1" )
                {
                    for( var i = 0; i < dataElementsAndValueForCalculationMap.length; i++ )
                    {
                        if( dataElementsAndValueForCalculationMap[i].keyDataElement === selectedDEUid )
                        {
                            dataElementsAndValueForCalculationMap[i].dataElementValue = "0";
                        }
                    }

                    def.resolve( dataElementsAndValueForCalculationMap );
                }
                else
                {
                    def.resolve( dataElementsAndValueForCalculationMap );
                }

                return def;
            },

            extractAllEventMembers: function (events) {
                var eventMembers = [];
                var eventMembersMap = [];
                for (var i = 0; i < events.length; i++) {
                    if (events[i].eventMembers) {
                        for (var j = 0; j < events[i].eventMembers.length; j++) {
                            if (!eventMembersMap[events[i].eventMembers[j].trackedEntityInstance]) {
                                eventMembers.push(events[i].eventMembers[j]);
                                eventMembersMap[events[i].eventMembers[j].trackedEntityInstance] = events[i].eventMembers[j];
                            }
                        }
                    }
                }
                return eventMembers;
            },
            addEventMembersToEventAndUpdate: function (event) {
                var thiz = this;
                // this will add association to event
                // get all events of this TEI and extract all event members to add to this event
                AjaxCalls.getAllEventsByTEI(event.trackedEntityInstance).then(function (data) {

                    var allEventMembers = thiz.extractAllEventMembers(data.events);
                    if (allEventMembers.length > 0) {
                        event.eventMembers = allEventMembers;
                    }
                    DHIS2EventFactory.update(event).then(function(response){
                        if (response.httpStatus == "OK"){
                            console.log("EventMembers added successfully");
                            $timeout(function () {
                                $rootScope.$broadcast('association-widget', {event : event , show :true});
                            });
                        }else{
                            console.log("An unexpected thing occurred.");
                        }
                    })
                })

            },
            addEventMemberIfExist : function(eventTo,eventFrom){
                if (eventFrom.eventMembers)
                    eventTo.eventMembers = eventFrom.eventMembers;
                return eventTo;
            }




        }
    })


    // add new service for create new organisation unit while registration of establishment
    .service('CustomOrganisationUnitService',  function ($http, $q){
        return {
            addNewOrganisationUnit: function(tei,selectedEnrollmentObject,destination){
                var def = $.Deferred();

                var orgUnitName = "";
                if (destination == 'PROFILE' || !destination || selectedEnrollmentObject.program != 'tITlMGNJTbJ'){
                    def.resolve("Not Needed");
                    return def;
                }

                if( tei.attributes != undefined )
                {
                    for (var j=0;j<tei.attributes.length;j++)
                    {
                        if( tei.attributes[j].displayName != undefined && tei.attributes[j].displayName === 'Name')
                        {
                            orgUnitName = tei.attributes[j].value;
                            break;
                        }
                    }
                }

                var orgUnitObject = {
                    name : orgUnitName,
                    code : orgUnitName,
                    parent:{
                        id : selectedEnrollmentObject.orgUnit
                    },
                    openingDate : selectedEnrollmentObject.enrollmentDate,
                    shortName: orgUnitName
                    //phoneNumber : data.sender
                };

                $http.post( DHIS2URL + '/organisationUnits' , orgUnitObject ).then(function(response){
                    //return response.data;
                    def.resolve(response.data);
                }, function(response) {
                    //Necessary now that import errors gives a 409 response from the server.
                    //The 409 response is treated as an error response.
                    //return response.data;

                    def.resolve(response.data);

                });

                return def;
                //return promise;
            }
        };
    });