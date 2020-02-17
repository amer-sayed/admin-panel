import { CustomButtonComponent } from '../services/action.component';
export class Settings {
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
      confirmSave : true, 
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      image: {
        addable : false,
        editable : false,
        filter: false,
        title: 'Categoti Photo',
        type: 'html',
        width:'15%',
        valuePrepareFunction: (image) => { return '<img class="cat" src= http://cryptic-coast-58246.herokuapp.com/images/' + image + '  />' },
      },
      name: {
        title: 'Ctegori Name',
        type: 'string',
      },
      message: {
        title: 'Message',
        type: 'string',
      },
      created_at: {
        title: 'Created_at',
        type: 'string',
      },
      updated_at: {
        title: 'Updated_at',
        type: 'string',
      },
      mediaControl: {
        title: 'Image Updata',
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