import { Component } from '@angular/core';

import { RobotApi, TablesLLModel } from '../../openapi/wrobot';


@Component({
    selector: 'page-llmodel-list',
    templateUrl: 'list.html',
    styleUrls: ['list.scss']
})
export class LLModelListComponent {

    public llmodels: Array<TablesLLModel> = [];

    constructor() {
        this.getLLModels();
    }

    public getLLModels() {
        RobotApi.llmodelList({}).then((data) => {
            this.llmodels = data || [];
        });
    }

    public deleteLLModel(item: TablesLLModel) {
        RobotApi.llmodelDelete({ mid: item.mid }).then(() => {
            this.getLLModels();
        });
    }

}
