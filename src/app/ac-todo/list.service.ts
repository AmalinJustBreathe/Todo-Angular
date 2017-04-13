import { Item } from './item.interface';

export class ListService {
    private _items: Item[];

    constructor() {
        this._items = [];
    }

    get items(): Item[] {
        return this._items;
    }

    public addItem(title: string): void {
        if (title === '') {
            return;
        };
        this.items.push({
            title: title,
            completed: false
        })
    }

    public removeItem(item: Item): void {
        this.items.splice(this.items.indexOf(item), 1);
    }

    public countRemains(): number {
        return this.items.filter((x) => {
            return !x.completed;
        }).length;
    }

    public countCompleted(): number {
        return this.items.filter((x) => {
            return x.completed;
        }).length;
    }

    public removeDone(): void {
        for (let i = this.items.length - 1; i >= 0; i--) {
            if (this.items[i].completed) {
                this.items.splice(i, 1);
            }
        }
    }

    public toggleAll(toVal: boolean): void {
        this.items.forEach((x) => {
            x.completed = toVal;
        });
    }

    public updateItem(item: Item, newTitle): void {
        item.title = newTitle;
    }

}
