import { CustomButtonComponent } from '../product/action.component';
  
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
        title: 'Products Photo',
        type: 'html',
        width: '15%',
        addable : false,
        editable : false,
        filter: false,
        valuePrepareFunction: (photoUrl) => { return '<img class="avatar" src="assets/images/avatar-exemple.jpg"/>' },
        //valuePrepareFunction: (photoUrl) => { return '<img class="avatar" src= ' + photoUrl + '  />' },
      },
      name: {
        title: 'User Name',
        type: 'string',
      },
      title: {
        title: 'Titel',
        type: 'string',
      },
      price: {
        title: 'Price',
        type: 'string',
      },
      status: {
        title: 'status',
        type: 'string',
      },
      
      discount: {
        title: 'Discount',
        type: 'string',
      },
      cat_name: {
        title: 'Categoty',
        type: 'string',
        addable : false,
        editable : false,
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

