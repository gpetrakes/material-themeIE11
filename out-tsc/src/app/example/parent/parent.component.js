//https://blog.angularindepth.com/angular-and-internet-explorer-5e59bb6fb4e9
import * as tslib_1 from "tslib";
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
var TREE_DATA = [
    {
        name: 'Fruit',
        children: [
            { name: 'Apple' },
            { name: 'Banana' },
            { name: 'Fruit loops' },
        ]
    }, {
        name: 'Vegetables',
        children: [
            {
                name: 'Green',
                children: [
                    { name: 'Broccoli' },
                    { name: 'Brussel sprouts' },
                ]
            }, {
                name: 'Orange',
                children: [
                    { name: 'Pumpkins' },
                    { name: 'Carrots' },
                ]
            },
        ]
    },
];
var ParentComponent = /** @class */ (function () {
    function ParentComponent() {
        this.transformer = function (node, level) {
            return {
                expandable: !!node.children && node.children.length > 0,
                name: node.name,
                level: level,
            };
        };
        this.treeControl = new FlatTreeControl(function (node) { return node.level; }, function (node) { return node.expandable; });
        this.treeFlattener = new MatTreeFlattener(this.transformer, function (node) { return node.level; }, function (node) { return node.expandable; }, function (node) { return node.children; });
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        this.hasChild = function (_, node) { return node.expandable; };
        this.dataSource.data = TREE_DATA;
    }
    ParentComponent = tslib_1.__decorate([
        Component({
            selector: 'parent',
            templateUrl: './parent.component.html',
            styleUrls: ['./parent.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ParentComponent);
    return ParentComponent;
}());
export { ParentComponent };
//# sourceMappingURL=parent.component.js.map