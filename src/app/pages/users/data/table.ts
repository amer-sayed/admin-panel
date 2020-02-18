import { CustomButtonComponent } from '../user/action.component';

export class Settings {
  parentFunctionToManageTheOnClickAction(id: any) {
    throw new Error("Method not implemented.");
  }
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    
    columns: {
      photoUrl: {
        title: 'User Photo',
        type: 'html',
        width: '15%',
        addable : false,
        editable : false,
        filter: false,
        valuePrepareFunction: (photoUrl) => { return '<img class="avatar" src="assets/images/avatar-exemple.jpg"/>' },
        //valuePrepareFunction: (photoUrl) => { return '<img class="avatar" src= ' + photoUrl + '  />' },
      },
      displayName: {
        title: 'User Name',
        type: 'string',
      },
      email: {
        title: 'User Email',
        type: 'string',
      },
      phoneNumber: {
        title: 'User Phone',
        type: 'string',
      },
      mediaControl: {
        title: 'View User',
        type: 'custom',
        addable : false,
        editable : false,
        filter: false,
        renderComponent: CustomButtonComponent,
        onComponentInitFunction: (instance: any) => {
            instance.save.subscribe(row => {
            });
        }
    },
    },
   
    };
  }

